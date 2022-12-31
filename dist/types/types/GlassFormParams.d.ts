interface Form {
    title: string;
    buttonText: string;
    submitFunction: any;
}
interface Input {
    label: string;
    type: string;
    placeholder: string;
    changeFunction?: any;
}
interface GlassFormParams {
    Form: Form;
    Inputs: Input[];
}
export default GlassFormParams;
