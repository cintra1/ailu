import { SignedIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Comprar Créditos"
        subtitle="Escolha um pacote de crédito adequado às suas necessidades!"
      />

      <section>
        <ul className="credits-list">
          {plans.map((plan) => (
            <li key={plan.name} className="credits-item">
              {plan.name === "Gratuito" ? (
                <div className="flex-center flex-col gap-3">
                  <Image src={plan.icon} alt="check" width={50} height={50} />
                  <p className="p-20-semibold mt-2 text-purple-500">
                    {plan.name}
                  </p>
                  <p className="h1-semibold text-dark-600">R$ {plan.price}</p>
                  <p className="p-16-regular">1 a 5 Créditos</p>
                </div>) : (
                <div className="flex-center flex-col gap-3">
                  <Image src={plan.icon} alt="check" width={50} height={50} />
                  <p className="p-20-semibold mt-2 text-purple-500">
                    {plan.name}
                  </p>
                  <p className="h1-semibold text-dark-600">R$ {plan.price}</p>
                  <p className="p-16-regular">{plan.credits} Créditos</p>
                </div>)}

              {/* Inclusions */}
              <ul className="flex flex-col gap-5 py-9">
                {plan.inclusions.map((inclusion) => (
                  <li
                    key={plan.name + inclusion.label}
                    className="flex items-center gap-4"
                  >
                    <Image
                      src={`/assets/icons/${
                        inclusion.isIncluded ? "check.svg" : "cross.svg"
                      }`}
                      alt="check"
                      width={24}
                      height={24}
                    />
                    <p className="p-16-regular">{inclusion.label}</p>
                  </li>
                ))}
              </ul>

              {plan.name === "Gratuito" ? (
                <a href="https://forms.gle/UpSpX24VkrTNziZW6">
                  <Button variant="outline" className="w-full">
                  Pedir créditos gratuitos
                  </Button>
                </a>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                  />
                </SignedIn>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Credits;