import React from "react";
import {Form, Input, Button} from 'antd';

export const FormComponent = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
            <div className="form-contact sm:py-6">
                <Form
                    name="basic"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Nom et prénom" 
                        name="fullname"
                        className="label-text text-5xl"
                        rules={[{required:true, message:"Votre nom svp!"}]}
                    >
                        <Input 
                            className="site-input-split" 
                            type="label-text text" >

                        </Input>
                    </Form.Item>
                    <Form.Item
                        label="telephone" 
                        name="phone"
                        className="label-text text-5xl"
                        rules={[{required: true, message:"Votre n° de téléphone svp!"}]}
                    >
                        <Input 
                            className="site-input-split" 
                            type="tel">                
                        </Input>
                    </Form.Item>
                    <Form.Item
                        label="Email" 
                        name="email"
                        className="label-text text-5xl"
                        rules={[{required: true, message:"Votre email svp! "}]}
                        >
                        <Input 
                            className="site-input-split" 
                            type="email">

                        </Input>
                    </Form.Item>
                    <Form.Item
                        label="Votre message" 
                        className="label-text text-lg"
                        name="message">
                            <Input.TextArea className="site-input-split" size="large" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16
                        }}
                    >
                    <Button type="primary" htmlType="submit">
                        Envoyer votre message
                    </Button>
                    </Form.Item>
                </Form>
            </div>    
    )
}