"use client"
import React, { useRef } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';
import { InputNumber } from 'primereact/inputnumber';

interface FormData {
  kod: number | null;
  email:number | null;
}

const Page: React.FC = () => {
  const toast = useRef<Toast | null>(null);
  const defaultValues: FormData = { kod: null,email:null };
  const form = useForm<FormData>({ defaultValues });
  const errors = form.formState.errors;

  const show = () => {
    toast.current?.show({
      severity: 'success',
      summary: 'Form Submitted',
      detail: form.getValues('kod'),
    });
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    data.kod && show();

    fetch("https://localhost:7197/api/User/ConfirmEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            data.year && show();
        } else {
            data.year && show();
        }
        });

    form.reset();
  };
  
  const getFormErrorMessage = (name: keyof FormData) => {
    return errors[name] ? (
      <small className="p-error">{errors[name]?.message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="flex justify-center">
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 p-4 bg-slate-100  mt-4">
        <Toast ref={toast} />
        <Controller
          name="kod"
          control={form.control}
          rules={{
            required: 'Enter a valid code.',
            validate: (value) => (value !== null && value !== undefined && value >= 100000 && value <= 1000000) || 'Enter a valid year.',
        }}
          render={({ field, fieldState }) => (
            <>
              <label htmlFor={field.name}>Enter your confirm code</label>
              <InputNumber
                id={field.name}
                inputRef={field.ref}
                value={field.value}
                onBlur={field.onBlur}
                onValueChange={(e) => field.onChange(e)}
                useGrouping={false}
                inputClassName={classNames({ 'p-invalid': fieldState.error })}
              />
              {getFormErrorMessage(field.name)}
            </>
          )}
        />
        <Button label="Submit" type="submit" icon="pi pi-check" />

      </form>
    </div>
  );
};

export default Page;
