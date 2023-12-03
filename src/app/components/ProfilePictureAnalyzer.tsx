import React, { useState } from 'react';

const ProfilePictureAnalyzer: React.FC = () => {
  const [mainColor, setMainColor] = useState<string>("");
  
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

          const imageData = ctx?.getImageData(0, 0, img.width, img.height);
          const hexColor = calculateHexColor(imageData?.data);
          
          if (hexColor) {
            setMainColor(hexColor);
            console.log(hexColor);
          }
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const calculateHexColor = (pixelData: Uint8ClampedArray | undefined): string | undefined => {
    if (!pixelData) return undefined;

    const colors: string[] = [];
    for (let i = 0; i < pixelData.length; i += 4) {
      const hex = `#${pixelData[i].toString(16).padStart(2, '0')}${pixelData[i + 1].toString(16).padStart(2, '0')}${pixelData[i + 2].toString(16).padStart(2, '0')}`;
      colors.push(hex);
    }

    // Use the first color as the average color
    return colors[0];
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} accept="image/*" />
      {mainColor && (
        <div>
          <p>Main Color:</p>
          <div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: mainColor,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default ProfilePictureAnalyzer;
