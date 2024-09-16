import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
// Hero.jsx
import styles from "./style";
import { cn } from "@/lib/utils";

const Example = () => {
  const pink_gradiant =
    "bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]";
  const white_gradiant = "bg-white bg-opacity-60 filter blur-[750px]";
  const blue_gradiant =
    "bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]";
  const bg_discount_gradient = "bg-gradient-to-tr from-gray-700 to-indigo-900";
  const text_gradient =
    " bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text";

  return (
    <div className="bg-white dark:bg-black p-6">
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY} `}
      >
        <div
          className={cn(
            "flex-1 flex-col xl:px-0 sm:px-16 px-6",
            styles.flexStart
          )}
        >
          <div
            className={cn(
              "flex flex-row items-center py-[6px] px-4",
              bg_discount_gradient,
              "rounded-[10px] mb-2"
            )}
          >
            <img
              src={"https://i.imgur.com/5BZrGDw.png"}
              alt="discount"
              className="w-[32px] h-[32px]"
            />
            <p className={cn(" ml-2", styles.paragraph)}>
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className={cn("", text_gradient)}>Generation</span>{" "}
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Payment Method.
          </h1>
          <p className={cn(styles.paragraph, " max-w-[470px] mt-5")}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>

        <div
          className={cn(
            "flex-1 flex",
            styles.flexCenter,
            " md:my-0 my-10 relative"
          )}
        >
          <img
            src={"https://i.imgur.com/8RJDGMU.png"}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div
            className={cn(
              "absolute z-[0] w-[40%] h-[35%] top-0",
              pink_gradiant
            )}
          />
          <div
            className={cn(
              "absolute z-[1] w-[80%] h-[80%] rounded-full",
              white_gradiant,
              "bottom-40"
            )}
          />
          <div
            className={cn(
              "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20",
              blue_gradiant
            )}
          />
          {/* gradient end */}
        </div>
      </section>
    </div>
  );
};

export default Example;

export const actualCodeString = `
// Hero.jsx
import styles from "./style";
import { cn } from "@/lib/utils";

const Example = () => {
  const pink_gradiant =
    "bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]";
  const white_gradiant = "bg-white bg-opacity-60 filter blur-[750px]";
  const blue_gradiant =
    "bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]";
  const bg_discount_gradient = "bg-gradient-to-tr from-gray-700 to-indigo-900";
  const text_gradient =
    " bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text";

  return (
    <div className="bg-white dark:bg-black p-6">
      <section
        id="home"
        className={cn("flex md:flex-row flex-col", styles.paddingY)}
      >
        <div
          className={cn(
            "flex-1 flex-col xl:px-0 sm:px-16 px-6",
            styles.flexStart
          )}
        >
          <div
            className={cn(
              "flex flex-row items-center py-[6px] px-4",
              bg_discount_gradient,
              "rounded-[10px] mb-2"
            )}
          >
            <img
              src={"https://i.imgur.com/5BZrGDw.png"}
              alt="discount"
              className="w-[32px] h-[32px]"
            />
            <p className={cn(" ml-2", styles.paragraph)}>
              <span className="text-white">20%</span> Discount For{" "}
              <span className="text-white">1 Month</span> Account
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className={cn("", text_gradient)}>Generation</span>{" "}
            </h1>
          </div>

          <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
            Payment Method.
          </h1>
          <p className={cn(styles.paragraph, " max-w-[470px] mt-5")}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>

        <div
          className={cn(
            "flex-1 flex",
            styles.flexCenter,
            " md:my-0 my-10 relative"
          )}
        >
          <img
            src={"https://i.imgur.com/8RJDGMU.png"}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />

          {/* gradient start */}
          <div
            className={cn(
              "absolute z-[0] w-[40%] h-[35%] top-0",
              pink_gradiant
            )}
          />
          <div
            className={cn(
              "absolute z-[1] w-[80%] h-[80%] rounded-full",
              white_gradiant,
              "bottom-40"
            )}
          />
          <div
            className={cn(
              "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20",
              blue_gradiant
            )}
          />
          {/* gradient end */}
        </div>
      </section>
    </div>
  );
};

export default Example;
`;

const InstallationStep: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

interface InstallationPageProps {
  steps: {
    title: string;
    content: React.ReactNode;
  }[];
}

export function InstallationPage({ steps }: InstallationPageProps) {
  return (
    <div className="min-h-screen pt-6 bg-white text-black dark:bg-gray-900 dark:text-white mt-16">
      <h1 className="text-3xl font-bold mb-6">Installation</h1>

      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        <TabsContent value="cli">
          <p>CLI Installation Comming Soon!!!</p>
        </TabsContent>

        <TabsContent value="manual">
          <Card className="bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              {steps.map((step, index) => (
                <InstallationStep key={index} title={step.title}>
                  {step.content}
                </InstallationStep>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
