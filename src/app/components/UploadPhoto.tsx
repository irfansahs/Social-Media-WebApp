
import React, { useRef, useState } from 'react';
import { Toast } from 'primereact/toast';
import { FileUpload, FileUploadHeaderTemplateOptions, FileUploadSelectEvent, FileUploadUploadEvent, ItemTemplateOptions,} from 'primereact/fileupload';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
import { Tag } from 'primereact/tag';

export default function UploadPhoto() {
    const toast = useRef<Toast>(null);
    const [totalSize, setTotalSize] = useState(0);
    const fileUploadRef = useRef<FileUpload>(null);

    const onTemplateSelect = (e: any) => {
        let _totalSize = totalSize;
        let files = e.files;

        for (let i = 0; i < files.length; i++) {
            _totalSize += files[i].size || 0;
        }

        setTotalSize(_totalSize);
    };

   

    const onTemplateRemove = (file: File, callback: Function) => {
        setTotalSize(totalSize - file.size);
        callback();
    };

    const onTemplateClear = () => {
        setTotalSize(0);
    };

    const headerTemplate = (options: FileUploadHeaderTemplateOptions) => {
        const { className, chooseButton, uploadButton, cancelButton } = options;
        const value = totalSize / 10000;
        const formatedValue = fileUploadRef && fileUploadRef.current ? fileUploadRef.current.formatSize(totalSize) : '0 B';

        return (
            <div className={className} style={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center' }}>
                {chooseButton}
                {cancelButton}
                <div className="flex align-items-center gap-3 ml-auto">
                    <span>{formatedValue} / 2 MB</span>
                    <ProgressBar value={value} showValue={false} style={{ width: '10rem', height: '12px' }}></ProgressBar>
                </div>
            </div>
        );
    };

    const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
        const file = inFile as any;
        return (
            <div className="flex align-items-center flex-wrap">
                <div className="flex align-items-center" style={{ width: '40%' }}>
                    <img alt={file.name} role="presentation" src={file.objectURL} width={100} />
                    <span className="flex flex-column text-left ml-3">
                      
                    </span>
                </div>
                <Button type="button" icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger ml-auto" onClick={() => onTemplateRemove(file, props.onRemove)} />
            </div>
        );
    };

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
   

    const chooseOptions = { icon: 'pi pi-fw pi-images', iconOnly: true, className: 'custom-choose-btn p-button-rounded p-button-outlined' };
    const cancelOptions = { icon: 'pi pi-fw pi-times', iconOnly: true, className: 'custom-cancel-btn p-button-danger p-button-rounded p-button-outlined' };

    return (
        <div className=' bg-slate-50'>
            <Toast ref={toast}></Toast>

            <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />

            <FileUpload ref={fileUploadRef} name="demo[]" url="/api/upload" accept="image/*" maxFileSize={2000000}
                onSelect={onTemplateSelect}  onError={onTemplateClear} onClear={onTemplateClear}
                headerTemplate={headerTemplate} itemTemplate={itemTemplate} 
                chooseOptions={chooseOptions} cancelOptions={cancelOptions} />
        
        
   
        
        </div>
    )
}
        