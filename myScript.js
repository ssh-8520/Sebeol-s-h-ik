
let toggleBtn = document.querySelector('#toggleBtn');
let menuList = document.querySelector('.menuBar_items');

let windowWidth;
let windowHeight;
let scrollY = 0;
let relativeScrollY = 0;
let totalScrollHeight = 0;
let currentScene = 0;
let calAnimationVal;
let prevDurations = 0;
let pixelDuration = 0;
let animationKeyframes = [
    {/*0 pc 오해와 진실 타이틀 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*1 mobile 오해와 진실 타이틀 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*2 pc 오해와 진실 1 in */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*3 mobile 오해와 진실 1 in */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*4 pc 오해와 진실 1 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*5 mobile 오해와 진실 1 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-1100, 0]
        }
    },
    {/*6 pc 오해와 진실 2 in */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, 1300]
        }
    },
    {/*7 mobile 오해와 진실 2 in */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*8 pc 오해와 진실 2 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/* 9mobile 오해와 진실 2 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/* 10pc 오해와 진실 3 in */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*11 mobile 오해와 진실 3 in */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*12 pc 오해와 진실 3 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*13 mobile 오해와 진실 3 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*14 pc 오해와 진실 4 in */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*15 mobile 오해와 진실 4 in */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/* 16pc 오해와 진실 4 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*17 pc 종류 1 텍스트 in */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*18 mobile 종류 1 텍스트 in */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*19 pc 종류 1 텍스트 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/* 20 mobile 종류 1 텍스트 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, 100]
        }
    },
    {/* 21 pc 종류 1 이미지 in */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*22 mobile 종류 1 이미지 in */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
    {/*23 pc 종류 1 이미지 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*24  mobile 종류 1 이미지 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
     {/*25 pc 종류 1 이미지 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*26  mobile 종류 1 이미지 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
     {/*27 pc 종류 1 이미지 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*28  mobile 종류 1 이미지 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
      {/*29 pc 종류 1 이미지 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*30  mobile 종류 1 이미지 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
     {/*31 pc 종류 1 이미지 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*32  mobile 종류 1 이미지 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
       {/*33 pc 종류 1 이미지 out */
        animationVal:{
            opacity:[0, 1],
            textMove:[-100, 0]
        }
    },
    {/*34  mobile 종류 1 이미지 out */
        animationVal:{
            opacity:[1, 0],
            textMove:[0, -100]
        }
    },
           {/*35 pc 종류 1 이미지 out */
            animationVal:{
                opacity:[0, 1],
                textMove:[-100, 0]
            }
        },
        {/*36  mobile 종류 1 이미지 out */
            animationVal:{
                opacity:[1, 0],
                textMove:[0, -100]
            }
        },
          {/*37 pc 종류 1 이미지 out */
            animationVal:{
                opacity:[0, 1],
                textMove:[-100, 0]
            }
        },
        {/*38  mobile 종류 1 이미지 out */
            animationVal:{
                opacity:[1, 0],
                textMove:[0, -100]
            }
        },
              {/*39 pc 종류 1 이미지 out */
                animationVal:{
                    opacity:[0, 1],
                    textMove:[-100, 0]
                }
            },
            {/*40  mobile 종류 1 이미지 out */
                animationVal:{
                    opacity:[1, 0],
                    textMove:[0, -100]
                }
            },
                  {/*41 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*42  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                 {/*43 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*44  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                 {/*45 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*46  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                  {/*47 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*48  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                  {/*49 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*50  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                  {/*51 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*52  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                 {/*53 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*54  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                   {/*55 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*56  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                 {/*57 pc 종류 1 이미지 out */
                    animationVal:{
                        opacity:[0, 1],
                        textMove:[-100, 0]
                    }
                },
                {/*58  mobile 종류 1 이미지 out */
                    animationVal:{
                        opacity:[1, 0],
                        textMove:[0, -100]
                    }
                },
                
                
                
]

toggleBtn.addEventListener('click',clickFn);

function clickFn()
{
    menuList.classList.toggle('active');
}

let elemBody = document.body;

function init()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    render();
    resizeHandler();
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
}

function scrollHandler()
{
    scrollY = window.pageYOffset;

    if(scrollY < 0 || scrollY > (totalScrollHeight - windowHeight))
    {
        return;
    }

    if(scrollY > pixelDuration + prevDurations)
    {
        prevDurations += pixelDuration;
        currentScene++;
    }
    else if(scrollY < prevDurations)
    {
        currentScene--;
        prevDurations -= pixelDuration;
    }

    relativeScrollY = scrollY - prevDurations;

    render(currentScene);
}

function resizeHandler()
{
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    totalScrollHeight = 0;
    pixelDuration = windowHeight * 0.5;

    for( let i = 0; i < animationKeyframes.length; i++)
    {
        totalScrollHeight += pixelDuration;
    }
    totalScrollHeight += windowHeight;

    elemBody.style.height = totalScrollHeight + 'px';
}

function render(nowState)
{
    let targetElem = document.querySelectorAll('.container');
    
    switch(nowState)
    {
        case 0:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[0].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[0].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[0].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[0].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[0].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 1:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[1].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[1].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[1].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[1].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            
            targetElem[0].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[0].querySelectorAll('.sa')[1].style.opacity = 0;
            //targetElem[0].querySelector('.sa').style.opacity = 0;
        
        }break;
        case 2:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[1].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[2].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[2].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[2].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[2].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 3:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[3].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[3].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[3].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[3].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[1].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[1].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 4:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[2].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[4].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[4].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[4].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[4].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 5:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[5].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[5].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[5].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[5].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[2].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[2].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 6:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[3].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[6].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[6].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[6].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[6].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 7:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[7].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[7].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[7].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[7].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[3].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[3].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 8:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[4].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[8].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[8].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[8].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[8].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 9:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[5].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[9].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[9].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[9].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[9].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[4].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[4].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 10:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[5].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[10].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[10].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[10].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[10].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 11:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[6].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[11].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[11].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[11].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[11].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[5].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[5].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 12:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[6].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[12].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[12].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[12].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[12].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 13:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[7].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[13].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[13].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[13].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[13].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[6].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[6].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 14:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[7].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[14].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[14].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[14].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[14].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 15:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[8].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[15].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[15].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[15].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[15].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[7].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[7].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 16:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[8].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[16].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[16].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[16].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[16].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 17:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[9].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[17].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[17].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[17].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[17].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[8].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[8].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 18:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[9].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[18].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[18].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[18].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[18].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 19:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[10].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[19].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[19].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[19].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[19].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateX(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveVal + 'px)';
            targetElem[9].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[9].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 20:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[10].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[20].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[20].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[20].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[20].animationVal.textMove);
            scrollAniElem[0].style.transform = 'translateX(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateX(' + moveVal + 'px)';
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
        }break;
        case 21:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[11].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[21].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[21].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[21].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[21].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[10].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[10].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 22:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[11].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[22].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[22].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[22].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[22].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 23:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[12].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[23].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[23].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[23].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[23].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[11].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[11].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 24:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[12].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[24].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[24].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[24].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[24].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 25:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[13].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[25].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[25].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[25].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[25].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[12].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[12].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 26:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[13].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[26].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[26].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[26].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[26].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 27:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[14].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[27].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[27].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[27].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[27].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[13].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[13].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 28:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[14].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[28].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[28].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[28].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[28].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 29:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[15].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[29].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[29].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[29].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[29].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[14].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[14].querySelectorAll('.sa')[1].style.opacity = 0;
           
        }break;
        case 30:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[15].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[30].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[30].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[30].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[30].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 31:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[16].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[31].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[31].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[31].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[31].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[15].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[15].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 32:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[16].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[32].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[32].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[32].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[32].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 33:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[17].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[33].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[33].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[33].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[33].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[16].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[16].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 34:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[17].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[34].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[34].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[34].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[34].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 35:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[18].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[35].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[35].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[35].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[35].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[17].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[17].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 36:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[18].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[36].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[36].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[36].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[36].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            
        }break;
        case 37:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[19].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[37].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[37].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[37].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[37].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[18].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[18].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 38:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[19].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[38].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[38].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[38].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[38].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 39:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[20].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[39].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[39].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[39].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[39].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[19].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[19].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 40:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[20].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[40].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[40].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[40].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[40].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 41:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[21].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[41].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[41].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[41].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[41].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[20].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[20].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 42:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[21].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[42].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[42].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[39].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[39].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 43:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[22].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[43].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[43].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[43].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[43].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[21].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[21].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 44:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[22].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[44].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[44].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[44].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[44].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 45:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[23].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[45].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[45].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[45].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[45].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[22].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[22].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 46:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[23].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[46].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[46].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[46].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[46].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 47:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[24].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[47].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[47].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[47].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[47].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[23].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[23].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 48:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[24].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[48].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[48].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[48].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[48].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 49:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[25].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[49].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[49].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[49].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[49].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[24].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[24].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 50:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[25].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[50].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[50].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[50].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[50].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 51:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[26].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[51].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[51].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[51].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[51].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[25].querySelectorAll('.sa')[0].style.opacity = 0;
            targetElem[25].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 52:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[26].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[52].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[52].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[52].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[52].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 53:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[27].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[53].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[53].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[53].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[53].animationVal.textMove);
            //console.log(scrollAniElem);
            scrollAniElem[0].style.opacity = opacityVal;
            //scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
           // scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
           targetElem[26].querySelectorAll('.sa')[0].style.opacity = 0;
           targetElem[26].querySelectorAll('.sa')[1].style.opacity = 0;
            
        }break;
        case 54:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[27].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[54].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[54].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[54].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[54].animationVal.textMove);
            //console.log(scrollAniElem);
            scrollAniElem[0].style.opacity = opacityVal;
            //scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            //scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 55:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[28].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[55].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[55].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[55].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[55].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[27].querySelector('.sa').style.opacity = 0;
            
        }break;
        case 56:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[28].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[56].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[56].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[56].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[56].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
        case 57:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[29].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[57].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[57].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[57].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[57].animationVal.textMove);
            //console.log(scrollAniElem);
            scrollAniElem[0].style.opacity = opacityVal;
           // scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
           // scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
            targetElem[28].querySelector('.sa').style.opacity = 0;
            
        }break;
        case 58:{
            let opacityVal, moveVal;
            let scrollAniElem = targetElem[29].querySelectorAll('.sa');
            opacityVal = calcAni(animationKeyframes[58].animationVal.opacity);
            opacityVal = calcAni(animationKeyframes[58].animationVal.opacity);
            moveVal = calcAni(animationKeyframes[58].animationVal.textMove);
            moveVal = calcAni(animationKeyframes[58].animationVal.textMove);
            scrollAniElem[0].style.opacity = opacityVal;
            //scrollAniElem[1].style.opacity = opacityVal;
            scrollAniElem[0].style.transform = 'translateY(' + moveVal + 'px)';
            //scrollAniElem[1].style.transform = 'translateY(' + moveVal + 'px)';
        }break;
    }
}

function calcAni(value)
{
    return(relativeScrollY / pixelDuration) * (value[1] - value[0]) + value[0];
}

init();
