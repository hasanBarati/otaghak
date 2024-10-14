import Layout from "@/components/Layout";
import Custom404 from "@/pages/404";
import { Idata } from "@/types";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import style from "./CityName.module.css";
import { CardRdender } from "./components/CardRdender";
import { Hero } from "./components/Hero";
import { PageInfo } from "./components/PageInfo";

export default function CityName({ data }: { data: Idata }) {
  if (!data.rooms) {
    return <Custom404 />;
  }
  return (
    <Layout>
      <Head>
        <title>
          {" "}
          اجاره اتاق، خانه، سوئیت و آپارتمان 24 ساعتی در{" "}
          {data.rooms[0].seoTitle}
        </title>
        <meta
          name="description"
          content={
            "اتاقک مجموعه‌ی کاملی از خانه روزانه، سوئیت ارزان قیمت و آپارتمان مبله در تهران را برای شما آماده‌ی رزرو کرده که در هر ساعتی از شبانه روز می‌توانید به سادگی کرایه کنید."
          }
        />
      </Head>
      <Hero />
      <div className={style.content}>
        <PageInfo data={data} />
        <CardRdender data={data} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cityName = context.params?.cityName || "";

  try {
    const response = await fetch(
      "https://develop.core.otaghak.com/odata/Otaghak/RoomsSearch/SearchRooms()",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkIn: null,
          checkOut: null,
          attributes: [],
          rules: [],
          filter: `cityCode eq '${cityName}' and includeAroundLocations eq true&$top=24&$skip=0&$count=true`,
        }),
      }
    );
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    return { props: { data: [] } };
  }
};
