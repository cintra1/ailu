"use client";

import React from 'react'
import { useToast } from '../ui/use-toast'
import { CldImage, CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image';
import { dataUrl, getImageSize } from '@/lib/utils';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

type MediaUploaderProps = {
    onValueChange: (value: string) => void;
    setImage: React.Dispatch<any>;
    image: any;
    publicId: string;
    type: string;

}

const MediaUploader = ( { onValueChange, setImage, image, publicId, type }: MediaUploaderProps) => {
    const { toast } = useToast();

    const onUploadSuccessHandler = (result: any) => {
        setImage((prevState: any) => ({
            ...prevState,
            publicId: result?.info.public_id,
            width: result?.info.width,
            height: result?.info.height,
            secureURL: result?.info?.secure_url,
        }))

        onValueChange(result?.info.public_id)

        toast({
            title: 'Imagem carregada com sucesso!',
            description: '1 crédito foi gasto da sua conta.',
            duration: 5000,
            className: 'success-toast'
        })
    }

    const onUploadErrorHandler = () => {
        toast({
            title: 'Ocorreu algum erro durante o carregamento!',
            description: 'Tente novamente.',
            duration: 5000,
            className: 'error-toast'
        })
    }

  return (
      <CldUploadWidget
          uploadPreset='jsm_ailu'
          options={{
              multiple: false,
              resourceType: 'image',
          }}
          onSuccess={onUploadSuccessHandler}
          onError={onUploadErrorHandler}
      >
          {({ open }) => (
              <div className="flex flex-col gap-4">
                  <h3 className='h3-bold text-purple-500'>
                      Original
                  </h3>

                  {publicId ? (
                      <>
                          <div className="cursor-pointer overflow-hidden rounded-[10px]">
                              <CldImage
                                  width={getImageSize(type, image, "width")}
                                  height={getImageSize(type, image, "height")}
                                  src={publicId}
                                  alt="image"
                                  sizes={"(max-width: 768px) 100vw, 50vw"}
                                  placeholder={dataUrl as PlaceholderValue}
                                  className='media-uploader_cldImage'
                              />
                        </div>
                      </>
                  ) : (
                          <div className='media-uploader_cta' onClick={() => open()}>
                              <div className='media-uploader_cta-image'>
                                  <Image src="/assets/icons/add.svg" alt='Add Image'
                                      width={24} height={24} />
                                 
                              </div>
                              <p className='p-14-medium'>Clique aqui para carregar uma imagem</p>
                          </div>
                  )}
              </div>
          )}
    </CldUploadWidget>
  )
}

export default MediaUploader