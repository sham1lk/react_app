"use client"

import React, { ChangeEvent, useState } from 'react';
import Image from "next/image";
import Placeholder from "@/public/images/placeholder.png";

const Demo: React.FC = () => {
    const [dicomImage, setDicomImage] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [pngImageUrl, setPngImageUrl] = useState<string | null>(null);

    const handleDicomImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setDicomImage(file || null);
    };

    const handleSubmit = async () => {
        setLoading(true);
        if (!dicomImage) return;

        const formData = new FormData();
        formData.append('file', dicomImage);

        const response = await fetch('http://10.100.10.55:8000/sin_contures', {
            method: 'POST',
            body: formData,
        });
        const blob = await response.blob()
        const imageUrl = URL.createObjectURL(blob);
        setPngImageUrl(imageUrl);
    };

    const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.length; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    };

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-60">
                <div className="py-12 md:py-20 border-t border-gray-800">
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h2 className="h2 mb-4">Демонстрация на примере РГ головы</h2>
                        <p className="text-xl text-gray-400">Загрузите файл в формате DICOM c рентгеном головы для поиска синуситов и патологий пазух головы.</p>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        {/* Поле для выбора DICOM изображения */}
                        <input type="file" onChange={handleDicomImageChange}
                               className="border border-gray-300 p-2 rounded-md"/>
                        {/* Кнопка для отправки изображения */}
                        <button onClick={handleSubmit}
                                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                            {loading ? 'Идет загрузка...' : 'Отправть'}
                        </button>
                        <div
                            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                            data-aos="fade-up">
                        {pngImageUrl ? (
                            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={pngImageUrl} width={540} height={405}
                                   alt="Features 03"/>
                            ):
                            (
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Placeholder} width={540} height={405}
                                       alt="Features 03"/>
                            )
                        }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Demo;