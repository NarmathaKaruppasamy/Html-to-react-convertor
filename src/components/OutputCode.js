import React from 'react';
import Button from './FormElements/Button';
import InputField from './FormElements/InputField';
import Label from './FormElements/Label';
import TextArea from './FormElements/TextArea';
import Radio from './FormElements/Radio';
import DropDown from './FormElements/DropDown';
import CheckBox from './FormElements/CheckBox';
import Title from './FormElements/Title';
import Paragraph from './FormElements/Paragraph';
import SpanTag from './FormElements/SpanTag';
import UnOrderedList from './FormElements/UnOrderedList';
import OrderList from './FormElements/OrderedList';
import DescList from './FormElements/DescList';
import MultiLink from './FormElements/MultiLink'

const OutputCode =()=>{

    const handleOnclick=()=>{
        console.log("Res");   
    }
    const handleChange = e => {
        console.log(e.target.value)
    };
    // const handleOnSelect = e => {
    //     console.log(e.target.value)
    // };
    const handleChoose = e=>{
        console.log(e.target.value)
    }
    return (
        <div className='result'>
            <main>
            <section className='output-container'>
                <form>
                <h3>Output</h3>
            {/* <textarea required>
            </textarea><br/><br/> */}
             {/* <Label className='nameLabel'forHtml="name" id="name"name="Name" value='Fullname:' required/>
            <InputField className="TextField" type="text" id="name" name="name" place="FirstName" required/><br/><br/>
            <input type='file'  style={{ display: 'none' }}/>
           
            <ul className='city'>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
            <ol>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ol>
            <UnOrderList className='unordered' id="info" value={['Coffee','Tea','Milk']}/>
            <OrderList className='ordered' id="info" value={['Coffee','Tea','Milk']}/>
            <h3> Main text <span>Span text</span></h3>
            <Title value='Main text' titleView='h1'/>
            <SpanTag value="Span text"/>
            <Title value='welcome' titleView='h2'/>
            <Title value='welcome' titleView='h3'/>
            <Title value='welcome' titleView='h4'/>
            <Title value='welcome' titleView='h5'/>
            <Title value='welcome' titleView='h6'/> */}

            {/* <a href="https://www.google.com" >Visit</a><br/> */}
            <MultiLink link="https://www.google.com" className='multilinkField' id="linkId" name="link" value="Visit Google"/>

           

                <InputField className="TextField" type="radio" id="name" name="name" place="FirstName"/>
                <Label className='nameLabel'forHtml="name" id="name"name="Name" value='Name :' required/>
            
           
            {/* <dl>
                <dt>Coffee</dt>
                <dd>- black hot drink</dd>
                <dt>Milk</dt>
                <dd>- white cold drink</dd>
            </dl> */}

            <DescList className='DefineField' id="colors" name='color' value={[{dtValue:'First',ddValue:['one','two','three']},{dtValue:'2',ddValue:['two']}]}/> 
            <InputField className="TextField" type="text" id="name" name="name" place="FirstName" required/><br/><br/>
            <UnOrderedList  class="unordered" value={[ 'Doctor Who','Sherlock','Triple D (Diners, Drive-Ins\" and Dives)','Hustle','Chopped',]}/>
            <fieldset>
            <legend>Choose a shipping method:</legend>
            <input id="overnight" type="radio" name="shipping" value="overnight"/>
            <label for="overnight">Overnight</label><br/>
            <input id="twoday" type="radio" name="shipping" value="twoday"/>
            <label for="twoday">Two day</label><br/>
            <input id="ground" type="radio" name="shipping" value="ground"/>
            <label for="ground">Ground</label>
            </fieldset>

            <Label className='SelectLabel' forHtml="colors" id="favcolor" name="color" value='Colors'/> 
            <DropDown className='SelectField' id="colors" value={['red','green','black']} name='color' required/>  <br/>

            <CheckBox className="CheckField" type="checkbox" id="read" name="check1" value="Reading" handleOnChoose={handleChoose} checked/>
            <Label className='checkLabel' forHtml="read" id="check1" name="label1" value="eading"/><br/>
            
            <CheckBox className="CheckField" type="checkbox" id="write" name="check2" value="Writing" handleOnChoose={handleChoose}/>
            <Label className='checkLabel' forHtml="write" id="check2"name="label2" value="Writing"/><br/><br/>

            <Radio className="RadioField" type="radio" id="contact" name="name" value="yes" handleOnChange={handleChange} required/>
            <Label className='radioLabel' forHtml="contact" id="question1" name="radio1" value="Yes"/><br/>

            <Radio className="RadioField" type="radio" id="contact" name="name" value="no" handleOnChange={handleChange} />
            <Label className='radioLabel' forHtml="contact" id="question2"name="radio2" value="No"/><br/><br/>

            <TextArea className='AddText' id="address" name='Address' rows='4' cols='40' value="personal address"/><br/><br/>

            <Button className='button' id="click" name='button' value="Download" handleOnclick={handleOnclick}/>
            <button className='convert-button' onClick={handleOnclick}>Download</button>

            </form>
            </section>
            </main>
        </div>
    
    );
}
export default OutputCode;