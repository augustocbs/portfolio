import React from "react";
import { Controller, Control, Path, FieldValues } from "react-hook-form";
import { Input } from "../ui/input";

interface ControlledInputProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
}

export function ControlledInput<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = "text",
  error,
  ...inputProps
}: ControlledInputProps<T>) {
  return (
    <div className="space-y-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            id={name}
            type={type}
            placeholder={placeholder}
            value={value || ""}
            onBlur={onBlur}
            onChange={onChange}
            {...inputProps}
          />
        )}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}