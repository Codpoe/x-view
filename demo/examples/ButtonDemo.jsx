import React from 'react';

import Button from '../../src/button/';

export default (props) => {
    return (
        <div>
            <h1>Button</h1>
            <br />
            <h3>一般</h3>
            <br/>
            <Button>默认按钮</Button>&nbsp;
            <Button type="primary">主要按钮</Button>&nbsp;
            <Button type="success">成功按钮</Button>&nbsp;
            <Button type="warning">警告按钮</Button>&nbsp;
            <Button type="error">错误按钮</Button>&nbsp;
            <br /> <br />
            <h3>边框 outline</h3>
            <br/>
            <Button outline>默认按钮</Button>&nbsp;
            <Button type="primary" outline>边框按钮</Button>&nbsp;
            <Button type="success" outline>边框按钮</Button>&nbsp;
            <Button type="warning" outline>边框按钮</Button>&nbsp;
            <Button type="error" outline>边框按钮</Button>
            <br /> <br />
            <h3>文字 text</h3>
            <br />
            <Button text>默认按钮</Button>&nbsp;
            <Button type="primary" text>文字按钮</Button>&nbsp;
            <Button type="success" text>文字按钮</Button>&nbsp;
            <Button type="warning" text>文字按钮</Button>&nbsp;
            <Button type="error" text>文字按钮</Button>
            <br /> <br />
            <h3>两边圆形 round</h3>
            <br/>
            <Button round>圆形按钮</Button>&nbsp;
            <Button type="primary" outline round>圆形按钮</Button>
            <br /> <br />
            <h3>全圆形 circle</h3>
            <br />
            <Button circle><i className="icon icon-search"></i></Button>&nbsp;
            <Button circle outline type="primary"><i className="icon icon-search"></i></Button>&nbsp;
            <Button circle type="primary"><i className="icon icon-search"></i></Button>
            <br/><br/>
            <h3>带图标</h3>
            <br/>
            <Button><i className="icon icon-upload"></i>&nbsp;带图标按钮</Button>&nbsp;
            <Button outline type="primary"><i className="icon icon-download"></i>&nbsp;带图标按钮</Button>
            <br /> <br />
            <h3>尺寸 size</h3>
            <br/>
            <Button size="large">大型按钮</Button>&nbsp;
            <Button size="normal">普通按钮</Button>&nbsp;
            <Button size="small">小型按钮</Button>
            <br /> <br />
            <h3>禁用 disabled</h3>
            <br/>
            <Button disabled>禁用按钮</Button>&nbsp;
            <Button outline disabled>禁用按钮</Button>&nbsp;
            <Button text disabled>禁用按钮</Button>
            <br /> <br />
            <h3>a 链接</h3>
            <br/>
            <Button href="http://t.tt" target="_blank" type="primary" round outline>内嵌 a 标签 -> Smartisan</Button>
            <br /> <br />
            <h3>块级 block</h3>
            <br/>
            <Button block>块级按钮</Button>
            <br /><br/>
            <Button outline round block>块级按钮</Button>
            <br />
        </div>    
    );
}