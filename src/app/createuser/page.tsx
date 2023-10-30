import React from "react";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

export default function page() {
  return (
    <form>
      <div className="flex justify-center items-center mt-6">
        <div className=" flex flex-col  gap-3 max-w-5xl">


          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user"></i>
            </span>
            <InputText placeholder="Username" />
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">$</span>
            <InputNumber placeholder="Price" />
            <span className="p-inputgroup-addon">.00</span>
          </div>

          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
          </div>

          
        </div>
      </div>
    </form>
  );
}
