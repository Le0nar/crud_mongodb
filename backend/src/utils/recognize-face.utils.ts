export const recognizeFace = (file: Express.Multer.File): boolean => {
  // Временный мок данных, в данном месте будет подключена нейросеть для анализа фотографии
  console.log('file', file)
  return Boolean(Math.round(Math.random()))
};
