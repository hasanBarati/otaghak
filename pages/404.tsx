import Layout from "@/components/Layout";
import Link from "next/link";
import React from "react";

const Custom404 = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
        <h2 className="text-2xl text-gray-700 mb-8">نتیجه ای یافت نشد </h2>
        <Link href="/" className="px-4 py-2 bg-Primary text-white rounded  ">
          انتقال به صفحه اصلی
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;
