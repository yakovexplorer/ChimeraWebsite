import React from 'react';
import ProductTable from './table';
import { useTranslations } from 'next-intl';
import { API_URL as apiEndpoint } from '@/constants/const';
export default function Statistics() {
  //to refactor
  const url = `${apiEndpoint}/info`
  const t = useTranslations('Home.Stats')
  return (
    <section className="text-gray-600 body-font border-b-2 border-neutral-800 bg-gray-950">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-white dark:text-white">{t('title')}</h1>
            <div className="leading-relaxed text-gray-400">{t('subtitle')}</div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-200">7K+</h2>
            <p className="leading-relaxed text-gray-400">Users</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-200">3.3M+</h2>
            <p className="leading-relaxed text-gray-400">Requests</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-200">3.0M+</h2>
            <p className="leading-relaxed text-gray-400">Completions</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-200">69K+</h2>
            <p className="leading-relaxed text-gray-400">Embeddings</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <ProductTable apiEndpoint={url} />
        </div>
      </div>
    </section>
  );
};
