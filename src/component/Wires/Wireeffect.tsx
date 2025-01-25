"use client";
import { useRef, useEffect } from 'react';
const width = globalThis.window.screen.availWidth

const WireEffect = () => {
    const pathRef1 = useRef(null);
    const pathRef2 = useRef(null);
    const pathRef3 = useRef(null);
    useEffect(() => {
        const paths: any = [pathRef1.current, pathRef2.current, pathRef3.current];

        // Set up initial styles for the path
        paths.forEach((path: any) => {
            if (path) {
                const totalLength = path.getTotalLength();
                path.style.strokeDasharray = totalLength;
                path.style.strokeDashoffset = totalLength;

                let startTime: number = 0;

                const animatePath = (timestamp: number) => {
                    if (!startTime) startTime = timestamp;

                    const progress = (timestamp - startTime) / 2500;
                    const drawLength = totalLength * progress;

                    path.style.strokeDashoffset = totalLength - drawLength;

                    if (progress < 1) {
                        requestAnimationFrame(animatePath);
                    } else {
                        path.style.strokeDashoffset = 0;
                    }
                };

                requestAnimationFrame(animatePath);
            }
        })

    }, []);

    return (
        <svg
            width="100%"
            height="300"
            viewBox={`0 400 ${width} 200`}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            className='z-50 '
        >
            <path
                ref={pathRef1}
                d="M0 587.5C147 587.5 277 587.5 310 573.5C348 563 392.5 543.5 408 535C434 523.5 426 526.235 479 515.235C494 512.729 523 510.435 538.5 512.735C554.5 516.735 555.5 523.235 576 523.735C592 523.735 616 496.735 633 497.235C648.671 497.235 661.31 515.052 684.774 524.942C692.004 527.989 700.2 528.738 707.349 525.505C724.886 517.575 741.932 498.33 757.5 498.742C773.864 498.742 791.711 520.623 810.403 527.654C816.218 529.841 822.661 529.246 828.451 526.991C849.246 518.893 861.599 502.112 879.5 501.742C886.47 501.597 896.865 506.047 907.429 510.911C930.879 521.707 957.139 519.639 982.951 520.063C1020.91 520.686 1037.5 530.797 1056.5 537C1102.24 556.627 1116.5 570.704 1180.5 579.235C1257.5 589.5 1279 587 1440 588"
                stroke="#FFDDB7"
                strokeWidth="2"
                fill="none"
            />
            <path
                ref={pathRef2}
                d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
                stroke="#B1C5FF"
                strokeWidth="2"
                fill="none"
                className=' brightness-100'
            />
            <path
                ref={pathRef3}
                d="M0 438.5C150.5 438.5 261 438.318 323.5 456.5C351 464.5 387.517 484.001 423.5 494.5C447.371 501.465 472 503.735 487 507.735C503.786 512.212 504.5 516.808 523 518.735C547 521.235 564.814 501.235 584.5 501.235C604.5 501.235 626 529.069 643 528.569C658.676 528.569 672.076 511.63 695.751 501.972C703.017 499.008 711.231 498.208 718.298 501.617C735.448 509.889 751.454 529.98 767 529.569C783.364 529.569 801.211 507.687 819.903 500.657C825.718 498.469 832.141 499.104 837.992 501.194C859.178 508.764 873.089 523.365 891 523.735C907.8 524.083 923 504.235 963 506.735C1034.5 506.735 1047.5 492.68 1071 481.5C1122.5 457 1142.23 452.871 1185 446.5C1255.5 436 1294 439 1439.5 439"
                stroke="#4FABFF"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    )
}

export default WireEffect