import { Domain, Event, Store } from "effector";
import { Field, FieldConfig, AnyFormValues, ValidationEvent, Rule } from "./types";
export declare function createField(fieldName: string, fieldConfig: FieldConfig<any>, domain?: Domain): Field<any>;
declare type BindValidationParams = {
    $form: Store<AnyFormValues>;
    submitEvent: Event<void>;
    field: Field<any>;
    rules: Rule<any, any>[];
    formValidationEvents: ValidationEvent[];
    fieldValidationEvents: ValidationEvent[];
};
export declare function bindValidation({ $form, submitEvent, field, rules, formValidationEvents, fieldValidationEvents }: BindValidationParams): void;
export declare function bindChangeEvent({ $value, onChange, name }: Field<any>, setForm: Event<Partial<AnyFormValues>>): void;
export {};
