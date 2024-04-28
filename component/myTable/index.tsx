'use client';
import React from 'react';
import * as XLSX from 'xlsx';
import { Button } from '@prismane/core';

interface ExcelData {
  Тип: string;
  Отзыв: string;
  Релевантность: string;
  'Вопрос 2': string;
  'Вопрос 3': string;
  'Вопрос 4': string;
  'Вопрос 5': string;
}

const MyTable: React.FC<{ data: ExcelData[] }> = ({ data }) => {
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Отзывы студентов');
    XLSX.writeFile(wb, 'data.xlsx');
  };

  return <Button onClick={exportToExcel}>Экспорт в Excel</Button>;
};

export default MyTable;
