import pouria from "../../assets/images/trs-pouria2.png";

const PouriaHexagonIcon = () => {
    return (
        <svg
            className="max-w-[475px] w-96 lg:w-[475px] md:min-w-[400px] pouria-hex-icon pt-1"
            width={500}
            height={500}
            fill="currentcolor"
            viewBox="0 0 550 590"
            xmlns="http://www.w3.org/2000/svg">
            <mask id="maskBlob" mask-type="alpha">
                <path
                    d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                    170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                    447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                    587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                    438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
                />
            </mask>
            <g mask="url(#maskBlob)">
                <path
                    d="M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 
                    170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 
                    447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 
                    587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 
                    438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z"
                />

                <rect x="37" width="476" height="630" fill="url(#pattern0)" />
            </g>

            <rect x="37" width="476" height="300" fill="url(#pattern1)" />

            <defs>
                <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <use
                        href="#imageBlob"
                        transform="matrix(0.00143057 0 0 0.00108108 0.0404062 0)"
                    />
                </pattern>

                <pattern
                    id="pattern1"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1">
                    <use
                        href="#imageBlob"
                        transform="matrix(0.00143057 0 0 0.00226984 0.0404062 0)"
                    />
                </pattern>

                <image
                    id="imageBlob"
                    href={pouria}
                    x="30"
                    y="-5"
                    width="640"
                    height="925"
                />
            </defs>
        </svg>
    );
};

export default PouriaHexagonIcon;
