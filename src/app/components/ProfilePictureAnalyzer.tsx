import React, { useState } from 'react';

const ProfilePictureAnalyzer: React.FC = () => {
  const [mainColor, setMainColor] = useState<number[]>([]);
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;

        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, img.width, img.height);

          const pixelData = ctx?.getImageData(0, 0, img.width, img.height).data;

          if (pixelData) {
            const colors: number[] = [];
            for (let i = 0; i < pixelData.length; i += 4) {
              colors.push(pixelData[i], pixelData[i + 1], pixelData[i + 2]);
            }
            const averageColor = calculateAverageColor(colors);
            setMainColor(averageColor);
            console.log(averageColor);
          }
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const calculateAverageColor = (colors: number[]): number[] => {
    const totalColors = colors.length / 3;
    const sum = colors.reduce((acc, color) => acc + color, 0);
    const average = sum / totalColors;
    return [average, average, average]; // For simplicity, returning a grayscale average color
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {mainColor.length > 0 && (
        <div>
          <p>Main Color:</p>
          <div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: `rgb(${mainColor.join(',')})`,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ProfilePictureAnalyzer;
