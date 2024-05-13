type TPayloadProps = { [index: string]: any };

export const modifyPayload = (values: TPayloadProps) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  //   console.log(formData.get("data"));
  return formData;
};
