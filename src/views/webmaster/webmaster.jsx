/* eslint-disable react/jsx-no-bind */
const React = require('react');

const Box = require('../../components/box/box.jsx');

const Page = require('../../components/page/www/page.jsx');
const render = require('../../lib/render.jsx');

const Markdown = require('../../components/markdown/markdown.jsx').default;

const about = require('./about.md').default;

require('./webmaster.scss');

const Webmaster = () => {
    React.useEffect(() => {
        // 屏蔽右键菜单
        document.oncontextmenu = function (event){
            if (window.event) {
                event = window.event;
            }
            try {
                const the = event.srcElement;
                if (!((the.tagName === 'INPUT' && the.type.toLowerCase() === 'text') || the.tagName === 'TEXTAREA')){
                    return false;
                }
                return true;
            } catch (e){
                return false;
            }
        };

    }, []);
    return (
        <div className="inner webmaster">
            <Box
                title={'关于站长'}
            >
                <p
                    style={{
                        textAlign: 'center'
                    }}
                >
                    <strong>
                        站长简介
                    </strong>
                </p>
                <p>
                    <strong>
                        郭泓毅
                    </strong>
                    ，Scratch编程爱好者
                </p>
                <p>
                    我会的编程语言：Python、C/C++、C#、Java、Node.js、React、JS、Scratch、CSS、HTML、HTML5等
                </p>
                <p>
                    本站账号：
                    <a href="/users/webmaster">PerfectGHY</a>
                </p>
                <p>
                    联系邮箱：916881890@qq.com
                </p>

                <p>下面是我于2024年建站时写的一些话：</p>

                <Markdown
                    getContent={content => content}
                    className="mkdn"
                    base64Url
                >
                    {about}
                </Markdown>

                <video
                    src="/images/intoduction.mp4"
                    style={{
                        width: '100%'
                    }}
                    controls
                    controlsList="nodownload"
                    // eslint-disable-next-line react/no-unknown-property
                    controls360="no"
                />

                <div className="webmaster-footer">
                    <img
                        alt="sprites"
                        src="/images/spritesforcommunityguid.png"
                    />
                </div>
            </Box>
        </div>
    );
};

render(<Page><Webmaster /></Page>, document.getElementById('app'));
