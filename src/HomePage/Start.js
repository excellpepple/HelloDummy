import React, {useState, useEffect} from 'react';
import {Result} from "antd";
import Banner from "../images/banner.svg"
import {Button, Image} from "react-bootstrap";

export default function App() {
    const greeting = 'Hello Function Component!';

    return (
        <>
          <Result
            icon={<Image src={Banner} className="h-25 w-25 mt-5"/>}
            title="Welcome to Dont-Be-A-Dummy.com!"
            subTitle="Your number one site for fake and random articles."
            extra={<Button className="btn-lg " variant="outline-info">Next</Button>}
          />
        </>
    );
}
 