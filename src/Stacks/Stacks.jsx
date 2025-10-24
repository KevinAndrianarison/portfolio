import Container from "../ReusableComponent/Container";
import { useTranslation } from "react-i18next";

export default function Stacks() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-3xl aref font-bold">{t("technologies")}</h1>
      <div className="flex gap-2 items-end flex-wrap">
        <Container logo="react" name="ReactJs" isStack />
        <Container logo="next" name="NextJs" isStack />
        <Container logo="vue" name="VueJs" isStack />
        <Container logo="nuxt" name="NuxtJs" isStack />
        <Container logo="laravel" name="Laravel" isStack />
        <Container logo="nest" name="NestJs" isStack />
        <Container logo="express" name="Express" isStack />
        <Container logo="nodejs" name="NodeJs" isStack />
        <Container logo="tailwind" name="Tailwind" isStack />
        <Container logo="flutter" name="Flutter" isStack />
        <Container logo="windows" name="Windows" isStack />
        <Container logo="linux" name="Linux" isStack />
        <Container logo="npm" name="NPM" isStack />
        <Container logo="mysql" name="MySQL" isStack />
        <Container logo="mongodb" name="MongoDB" isStack />
        <p className="aref">{t("andMore")}</p>
      </div>
    </div>
  );
}
