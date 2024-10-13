export const AddIcon = (props) => {
  return (
    <svg
      id="Layer_1"
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
    </svg>
  );
};

export const ConcentricCirclesIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.877 19.877"
      //   xml:space="preserve"
    >
      <g>
        <g>
          <path
            style={{ fill: "#030104" }}
            d="M9.938,3.403c-3.604,0-6.537,2.933-6.537,6.537s2.933,6.537,6.537,6.537s6.538-2.933,6.538-6.537
			C16.476,6.336,13.542,3.403,9.938,3.403z M9.938,14.892c-2.73,0-4.952-2.222-4.952-4.952s2.222-4.952,4.952-4.952
			c2.731,0,4.953,2.222,4.953,4.952S12.669,14.892,9.938,14.892z"
          />
          <path
            style={{ fill: "#030104" }}
            d="M9.938,0.001C4.458,0.001,0,4.459,0,9.938s4.458,9.938,9.938,9.938
			c5.481,0,9.939-4.458,9.939-9.938C19.877,4.459,15.419,0.001,9.938,0.001z M9.938,18.292c-4.606,0-8.353-3.746-8.353-8.353
			c0-4.606,3.747-8.353,8.353-8.353s8.353,3.747,8.353,8.353C18.291,14.545,14.544,18.292,9.938,18.292z"
          />
        </g>
      </g>
    </svg>
  );
};

export const DashedCircleIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="circle-dashed"
    >
      <rect
        width={props?.width || "16px"}
        height={props?.height || "16px"}
        fill="white"
      ></rect>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        d="M35.25567 103.14925a95.55835 95.55835 0 0 1 24.86208-43.0315M60.10646 195.89357a95.55822 95.55822 0 0 1-24.83534-43.04694M152.85078 220.74432a95.55827 95.55827 0 0 1-49.69741-.01544M220.74433 152.85075a95.55835 95.55835 0 0 1-24.86208 43.0315M195.89354 60.10643a95.55822 95.55822 0 0 1 24.83534 43.04694M103.14922 35.25568a95.55827 95.55827 0 0 1 49.69741.01544"
      ></path>
    </svg>
  );
};

export const LockIcon = (props) => {
  return (
    <svg
      width={props?.width || "16px"}
      height={props?.height || "16px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25 16C9.25 14.4812 10.4812 13.25 12 13.25C13.5188 13.25 14.75 14.4812 14.75 16C14.75 17.5188 13.5188 18.75 12 18.75C10.4812 18.75 9.25 17.5188 9.25 16ZM12 14.75C11.3096 14.75 10.75 15.3096 10.75 16C10.75 16.6904 11.3096 17.25 12 17.25C12.6904 17.25 13.25 16.6904 13.25 16C13.25 15.3096 12.6904 14.75 12 14.75Z"
        fill="#FFFFFF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.25 9.30277V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V9.30277C18.9768 9.31872 19.1906 9.33948 19.3918 9.36652C20.2919 9.48754 21.0497 9.74643 21.6517 10.3483C22.2536 10.9503 22.5125 11.7081 22.6335 12.6082C22.75 13.4752 22.75 14.5775 22.75 15.9451V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6516C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6516C1.74643 21.0497 1.48754 20.2919 1.36652 19.3918C1.24996 18.5248 1.24998 17.4225 1.25 16.0549V15.9451C1.24998 14.5775 1.24996 13.4752 1.36652 12.6082C1.48754 11.7081 1.74643 10.9503 2.34835 10.3483C2.95027 9.74643 3.70814 9.48754 4.60825 9.36652C4.80938 9.33948 5.02317 9.31872 5.25 9.30277ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V9.25344C16.8765 9.24999 16.4784 9.24999 16.0549 9.25H7.94513C7.52161 9.24999 7.12353 9.24999 6.75 9.25344V8ZM4.80812 10.8531C4.07435 10.9518 3.68577 11.1322 3.40901 11.409C3.13225 11.6858 2.9518 12.0743 2.85315 12.8081C2.75159 13.5635 2.75 14.5646 2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25H16C17.4354 21.25 18.4365 21.2484 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16C21.25 14.5646 21.2484 13.5635 21.1469 12.8081C21.0482 12.0743 20.8678 11.6858 20.591 11.409C20.3142 11.1322 19.9257 10.9518 19.1919 10.8531C18.4365 10.7516 17.4354 10.75 16 10.75H8C6.56459 10.75 5.56347 10.7516 4.80812 10.8531Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export const CloseIcon = (props) => {
  return (
    <svg
      width={props?.width || "16px"}
      height={props?.height || "16px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="transparent" />
      <path
        d="M7 17L16.8995 7.10051"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.00001L16.8995 16.8995"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BackIcon = (props) => {
  return (
    <svg
      width={props?.width || "16px"}
      height={props?.height || "16px"}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>

      <g data-name="arrow left" id="arrow_left">
        <path
          className="cls-1"
          style={{ fill: props?.color }}
          d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"
        />
      </g>
    </svg>
  );
};

export const PlayIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      viewBox="0 0 512 512"
      fill="white"
      stroke="white"
    >
      <g
        fill="white"
        stroke="white"
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            className="st0"
            style={{ fill: "black" }}
            d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256 C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031 c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031 l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z"
          />{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const PauseIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      viewBox="0 0 512 512"
      fill="white"
      stroke="white"
    >
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          style={{ fill: "black" }}
          d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320 c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320 c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z"
        />{" "}
      </g>
    </svg>
  );
};

export const AudioLoading = (props) => {
  return (
    <svg
      data-cy="audio-loading"
      className="audio-player-loading-spinner audio-player-loading-spinner-size"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="audio-player-loading-spinner-path"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  );
};

export const RewindIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
    >
      <polyline
        points="9.57 15.41 12.17 24.05 20.81 21.44"
        strokeLinecap="round"
      />
      <path
        d="M26.93,41.41V23a.09.09,0,0,0-.16-.07s-2.58,3.69-4.17,4.78"
        strokeLinecap="round"
      />
      <rect x="32.19" y="22.52" width="11.41" height="18.89" rx="5.7" />
      <path
        d="M12.14,23.94a21.91,21.91,0,1,1-.91,13.25"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ForwardIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
    >
      <path
        d="M23.93,41.41V23a.09.09,0,0,0-.16-.07s-2.58,3.69-4.17,4.78"
        strokeLinecap="round"
      />
      <rect x="29.19" y="22.52" width="11.41" height="18.89" rx="5.7" />
      <polyline
        points="54.43 15.41 51.83 24.05 43.19 21.44"
        strokeLinecap="round"
      />
      <path
        d="M51.86,23.94a21.91,21.91,0,1,0,.91,13.25"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const NoDataFallBackIcon = (props) => {
  return (
    <svg
      data-name="Layer 1"
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      viewBox="0 0 862.70323 644.78592"
    >
      <polygon
        points="629.943 612.644 612.777 612.644 604.608 546.435 629.943 546.435 629.943 612.644"
        fill="#9e616a"
      />
      <path
        d="M807.65107,769.99215H795.34112l-2.19727-11.62205-5.62754,11.62205H754.86738A7.33919,7.33919,0,0,1,750.697,756.6135l26.07247-18.00658v-11.7495l27.42368,1.63683Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <polygon
        points="731.923 590.981 718.148 601.224 672.085 552.969 692.415 537.851 731.923 590.981"
        fill="#9e616a"
      />
      <path
        d="M925.58816,737.04791,915.71,744.39344l-8.69827-8.015,2.41922,12.68419-26.19923,19.48211a7.33918,7.33918,0,0,1-11.32976-8.24721l10.17712-30.00728-7.0111-9.42842,22.98294-15.05066Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <path
        d="M818.57583,398.64705s32.56879,28.13791,17.542,108.35207l-18.3454,78.59653,59.8294,99.2561-19.07664,23.20771-77.77961-107.4334-28.18529-66.11365L744.6516,416.843Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <polygon
        points="599.447 425.746 597.488 456.084 603.483 585.365 631.692 580.452 637.083 488.406 599.447 425.746"
        fill="#2f2e41"
      />
      <polygon
        points="237.445 628.211 252.796 628.21 260.098 569.001 237.443 569.002 237.445 628.211"
        fill="#ffb6b6"
      />
      <path
        d="M402.178,750.80612l4.32074-.00018,16.86888-6.86018,9.0412,6.85913H432.41A19.26648,19.26648,0,0,1,451.67546,770.07v.62605l-49.49658.00183Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <polygon
        points="296.932 618.538 311.905 621.918 332.071 565.772 309.972 560.782 296.932 618.538"
        fill="#ffb6b6"
      />
      <path
        d="M462.86463,740.39329l4.21465.9516,17.96568-2.97583,7.3082,8.68223.0012.00027a19.26648,19.26648,0,0,1,14.54854,23.03569l-.1379.61067L458.48379,759.7967Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <path
        d="M386.6516,393.843c-7.19708,21.70636-6.43618,45.268,1.72992,70.55606l3.49087,142.37821S386.67128,700.146,403.4543,733.00177h24.34l12.05112-134.75129,1.5133-90.44591,52.18244,76.30583L460.30462,730.79868l29.9568,2.678,53.93408-159.1909L477.6516,419.843Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <path
        d="M667.346,332.01487c18.61732-16.77656,46.30893-25.21208,69.53714-15.805a115.466,115.466,0,0,0-51.888,59.93484c-3.6979,9.83846-6.78644,21.16623-15.88188,26.43349-5.65933,3.27753-12.70027,3.4377-19.04568,1.85557-6.34568-1.58237-12.16226-4.75415-17.89913-7.89422l-1.63218-.03691C637.86406,372.53682,648.72872,348.79142,667.346,332.01487Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#e6e6e6"
      />
      <path
        d="M736.75328,316.71942A98.69239,98.69239,0,0,0,681.847,342.64994a42.50049,42.50049,0,0,0-8.34534,10.37667,24.37584,24.37584,0,0,0-2.81751,12.51568c.10054,4.05833.67335,8.19792-.21438,12.21a14.92537,14.92537,0,0,1-7.42454,9.68865c-4.54586,2.613-9.7595,3.43673-14.886,4.0651-5.692.69769-11.61526,1.33219-16.54238,4.5248-.597.38683-1.16231-.56211-.56622-.94836,8.57235-5.5546,19.41969-3.5335,28.63724-7.24065,4.30108-1.72983,8.10691-4.76631,9.454-9.35719,1.17794-4.01452.5909-8.2838.45359-12.39207a26.01068,26.01068,0,0,1,2.299-12.34028,39.29038,39.29038,0,0,1,7.9156-10.65924,95.74917,95.74917,0,0,1,24.3333-17.41978A100.44256,100.44256,0,0,1,736.743,315.61475c.70319-.09065.70886,1.01461.01026,1.10467Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M686.44718,337.79134a14.807,14.807,0,0,1,1.63241-19.1039c.50628-.49873,1.30506.26457.79811.764a13.71094,13.71094,0,0,0-1.48216,17.77371c.41512.5769-.53561,1.13983-.94836.56623Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M670.36216,363.49127a28.53932,28.53932,0,0,0,20.3938-4.08346c.59834-.38471,1.16384.56412.56622.94836a29.68517,29.68517,0,0,1-21.23023,4.20607c-.70085-.12626-.42683-1.19655.27021-1.071Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M714.44656,321.9478a8.38148,8.38148,0,0,0,6.2686,4.89443c.7021.11732.42732,1.18753-.27021,1.071a9.39213,9.39213,0,0,1-6.94675-5.39917.57084.57084,0,0,1,.19107-.7573.55506.55506,0,0,1,.75729.19107Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M762.46124,397.11454c-.44048-.06079-.881-.12157-1.32791-.1756a110.37862,110.37862,0,0,0-17.88208-.90839c-.46221.00673-.93053.02051-1.39159.0405a116.3646,116.3646,0,0,0-41.75015,9.61014,113.00482,113.00482,0,0,0-15.16291,8.0555c-6.68773,4.23438-13.602,9.35764-21.078,11.08459a19.38584,19.38584,0,0,1-2.36217.42086l-30.88864-26.74546c-.03969-.096-.0858-.18531-.12584-.28162l-1.28212-1.01147c.23872-.17556.49008-.35251.72879-.52808.138-.10241.283-.19887.421-.30128.09422-.06639.18881-.13253.27-.19782.03128-.02222.0629-.04413.08811-.05934.08122-.06529.1636-.11732.23871-.17556q2.10345-1.4895,4.23516-2.95463c.00611-.007.00611-.007.0191-.00815a166.15689,166.15689,0,0,1,34.601-18.59939c.36686-.13859.73948-.28453,1.12045-.4109a107.831,107.831,0,0,1,16.93919-4.76651,95.32878,95.32878,0,0,1,9.5528-1.33433,79.272,79.272,0,0,1,24.72335,1.7516c16.14332,3.7433,30.90977,12.60785,39.65578,26.43254C762.02688,396.40555,762.24387,396.75367,762.46124,397.11454Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#e6e6e6"
      />
      <path
        d="M762.05235,397.44645a98.69236,98.69236,0,0,0-59.45156-12.3533A42.50006,42.50006,0,0,0,689.69,388.35387a24.3758,24.3758,0,0,0-9.78493,8.29673c-2.36313,3.30088-4.39808,6.951-7.52245,9.62a14.92533,14.92533,0,0,1-11.76132,3.26575c-5.2028-.6506-9.86156-3.13185-14.3331-5.71664-4.9648-2.86991-10.0762-5.92951-15.93241-6.34685-.70956-.05056-.5896-1.14861.11888-1.09812,10.1888.72611,17.633,8.8707,27.22462,11.46035,4.47564,1.20837,9.34256,1.07528,13.18213-1.77925,3.35754-2.49617,5.45923-6.25839,7.82305-9.62129a26.01082,26.01082,0,0,1,9.26529-8.46889,39.29037,39.29037,0,0,1,12.73777-3.74506,95.74907,95.74907,0,0,1,29.91669.7416,100.44263,100.44263,0,0,1,32.085,11.59611c.616.351-.04488,1.23688-.65689.88819Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M709.199,383.98345a14.807,14.807,0,0,1,12.80526-14.27057c.7045-.09339.88272.997.17729,1.0905a13.711,13.711,0,0,0-11.88443,13.29895c-.01588.71056-1.11391.58761-1.09812-.11888Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M680.88287,394.81911a28.53928,28.53928,0,0,0,18.74183,9.01806c.70936.05308.58963,1.15113-.11888,1.09812a29.68518,29.68518,0,0,1-19.4835-9.42375c-.48357-.52277.37961-1.21236.86055-.69243Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M741.09383,388.19084a8.38147,8.38147,0,0,0,2.05834,7.68205c.49.51638-.37378,1.20545-.86055.69243a9.39216,9.39216,0,0,1-2.29591-8.49336.57082.57082,0,0,1,.6085-.48962.55506.55506,0,0,1,.48962.6085Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M219.92162,754.74293c-1.45,5.44-5.26,9.97-9.86,13.27-.75.54-1.52,1.04-2.3,1.51-.24.14-.48.29-.73.42q-.405.24-.81.45h-21.63c-.39-.79-.77-1.59-1.15-2.38-9.27-19.48-15.78-40.5-14.67-61.91a79.25417,79.25417,0,0,1,5.17-24.25c5.94-15.47,16.78-28.86,31.69-35.6.37-.17.76-.34,1.14-.5-.12.43-.24.85-.36,1.28a110.78533,110.78533,0,0,0-3.38,17.59c-.06.46-.11.92-.15,1.39a116.05427,116.05427,0,0,0,3.72,42.69c.01.03.01995.07.03.1q1.27506,4.605,2.96,9.07c.88,2.35,1.83,4.67,2.87,6.95C216.80163,734.393,222.62157,744.593,219.92162,754.74293Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#e6e6e6"
      />
      <path
        d="M207.04162,646.203c-.21.28-.42005.55-.63.83a98.12885,98.12885,0,0,0-11.12,18.76c-.16.33-.31.66-.44,1a97.8135,97.8135,0,0,0-7.82,29.24,1.49,1.49,0,0,0-.02.21c-.25,2.36005-.4,4.74-.46,7.12a42.48011,42.48011,0,0,0,1.43,13.24,23.7688,23.7688,0,0,0,5.46,9.42c.25.27.5.54.77.8.2.21.42.42.63.62,2.02,1.93,4.23,3.72,6.13,5.79a21.43163,21.43163,0,0,1,2.35,3,14.90407,14.90407,0,0,1,1.6,12.1c-1.36,5.06-4.47,9.33-7.65,13.4-1.59,2.04-3.23,4.1-4.65,6.28-.51995.78-1,1.57-1.43994,2.38h-1.26c.42-.81.88-1.6,1.38-2.38,3.65-5.75,8.84-10.69,11.53-17.02,1.82-4.26995,2.37-9.11.07-13.3a17.68156,17.68156,0,0,0-2.43-3.38c-1.83-2.07-4.02-3.84-6.01-5.71-.5-.47-.99-.95-1.46-1.45a24.96377,24.96377,0,0,1-5.64-8.9,39.23028,39.23028,0,0,1-1.94-13.13c0-2.84.15-5.7.43-8.54.03-.36.07-.73.11-1.1a100.76663,100.76663,0,0,1,19.67-49.23c.2-.28.41-.55.62-.82C206.68163,644.87294,207.47161,645.653,207.04162,646.203Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M186.36526,696.67763a14.807,14.807,0,0,1-12.3542-14.66278.55275.55275,0,0,1,1.10455-.02415,13.711,13.711,0,0,0,11.51986,13.616c.70147.11439.42725,1.18471-.27021,1.071Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M193.164,726.22406a28.5393,28.5393,0,0,0,11.53315-17.308c.15106-.69512,1.22186-.42407,1.071.27021a29.68514,29.68514,0,0,1-12.0379,17.98619c-.58485.40629-1.1479-.54428-.56622-.94836Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M194.96075,665.676a8.38149,8.38149,0,0,0,7.89345-.97168c.57941-.41351,1.14186.53754.56622.94836a9.39215,9.39215,0,0,1-8.72989,1.09429.57082.57082,0,0,1-.40038-.67059.55507.55507,0,0,1,.6706-.40038Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M282.06158,684.87294c-.35.27-.71.54-1.06.82a110.362,110.362,0,0,0-13.29,12c-.32.33-.64.67-.95,1.01l-.01.01a116.347,116.347,0,0,0-22.66,36.14l-.03.09c-.01.03-.02.05-.03.08a114.44321,114.44321,0,0,0-5.03,16.42c-1.22,5.46-2.22,11.31-4.13,16.57-.29.81-.61,1.61-.95,2.38h-44.46c.15-.79.31-1.59.47-2.38a160.30168,160.30168,0,0,1,10.54-33.7c.16-.36.32-.72.5-1.08a108.30478,108.30478,0,0,1,8.61-15.35.0098.0098,0,0,1,.01-.01,94.95585,94.95585,0,0,1,5.8-7.69,79.11871,79.11871,0,0,1,18.72-16.24c.04-.03.09-.05.13-.08,14.04-8.71,30.68-12.86,46.59-9.27h.01C281.25158,684.68294,281.6516,684.773,282.06158,684.87294Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#e6e6e6"
      />
      <path
        d="M282.01159,685.403c-.34.09-.68.19-1.01.29a98.5888,98.5888,0,0,0-20.17,8.27c-.32.17-.64.35-.96.53a98.25544,98.25544,0,0,0-23.79,18.59.035.035,0,0,0-.01.02c-.08.08-.17.17-.24.25-1.6,1.72-3.14,3.51-4.6,5.35a42.769,42.769,0,0,0-6.82,11.43,23.67365,23.67365,0,0,0-1.31,10.81c.03.37.08.73.13,1.1.04.29.08.58.13.88.66,4.01,1.8,8.03,1.48,12.12a14.90913,14.90913,0,0,1-6.01,10.63,23.794,23.794,0,0,1-3.68,2.34,36.85232,36.85232,0,0,1-5.77,2.38h-3.93c.53-.15,1.05-.3,1.58-.45a48.21182,48.21182,0,0,0,5.53-1.93,26.912,26.912,0,0,0,3-1.48c4.02-2.31,7.37005-5.85,8.07-10.58.61-4.14-.57-8.28-1.27-12.33-.12-.7-.23-1.39-.29-2.08a24.43856,24.43856,0,0,1,.85-10.46,39.0623,39.0623,0,0,1,6.36-11.66,83.355,83.355,0,0,1,5.48-6.55q.36-.40494.75-.81a100.901,100.901,0,0,1,24.21-18.73h.01a99.28782,99.28782,0,0,1,21.1-8.74h.01c.33-.1.67-.2,1-.29C282.53161,684.12294,282.69158,685.213,282.01159,685.403Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M235.116,713.25243a14.807,14.807,0,0,1-1.03613-19.1455c.43212-.5642,1.32915.08079.89646.64574A13.711,13.711,0,0,0,235.97653,712.56c.49121.51367-.37215,1.20316-.86055.69243Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M222.75543,740.93692a28.53931,28.53931,0,0,0,19.62921-6.87574c.53912-.46406,1.2309.397.69242.86054a29.68514,29.68514,0,0,1-20.44051,7.11332c-.71159-.02772-.58885-1.12569.11888-1.09812Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M260.64411,693.67444a8.38149,8.38149,0,0,0,6.8875,3.97657c.71159.01869.58807,1.11668-.11888,1.09812a9.39215,9.39215,0,0,1-7.62917-4.38226.57083.57083,0,0,1,.08406-.77649.55507.55507,0,0,1,.77649.08406Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M625.03076,300.73673a11.59945,11.59945,0,0,1-17.7667.83759l-37.80039,16.44009,3.682-21.10161,35.3314-12.37668a11.66235,11.66235,0,0,1,16.55372,16.20061Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#ffb8b8"
      />
      <path
        d="M599.80571,307.32525l-87.7976,39.10831-.18835-.06738-100.067-35.65889a32.95966,32.95966,0,0,1-14.78168-42.75569h0a32.92423,32.92423,0,0,1,46.9872-14.63652l74.4685,44.85908,72.21121-9.35878Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#e6e6e6"
      />
      <path
        d="M1031.35162,771.203a1.1865,1.1865,0,0,1-1.19,1.19h-860.29a1.19,1.19,0,0,1,0-2.38h860.29A1.1865,1.1865,0,0,1,1031.35162,771.203Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#ccc"
      />
      <path
        d="M481.99193,424.40352l-88.50585-14.15674a16.89334,16.89334,0,0,1-9.95557-23.646l4.01367-8.02832-1.55908-84.34668A62.48156,62.48156,0,0,1,416.32152,239.572l8.63086-5.16064,4.36182-11.07666,40.22022.981.11718,14.52734,14.40381,22.96826-.00049.09522-.90381,125.01367-3.96972,12.90137,6.00244,15.00586Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#e6e6e6"
      />
      <circle cx="284.4591" cy="45.40997" r="36.54413" fill="#ffb8b8" />
      <path
        d="M415.05385,180.98352c-1.09-4.59187-.58956-11.05349.02641-15.677,1.61485-12.12129,8.3464-23.64474,18.57336-30.47048a13.37957,13.37957,0,0,1,6.66453-2.64845c2.41939-.101,5.04189,1.19418,5.78465,3.499a11.99254,11.99254,0,0,1,6.76552-6.709,21.1355,21.1355,0,0,1,9.63075-1.29746,35.19728,35.19728,0,0,1,29.36306,20.98947c.97609,2.3188,3.70246-6.24621,4.93916-4.05528a9.7407,9.7407,0,0,0,5.52388,4.85342c2.4233.67619,3.40756,10.66034,4.3612,8.33222a11.0984,11.0984,0,0,1-10.61055,15.47525c-2.46642-.09228-4.82489-.99947-7.262-1.39-8.71512-1.39642-17.96,4.92316-19.82312,13.55058a23.98689,23.98689,0,0,0-3.15565-7.021,8.1187,8.1187,0,0,0-6.51321-3.57866c-2.47957.09278-4.6591,1.7139-6.26793,3.60295s-2.81713,4.093-4.43782,5.97186c-4.7555,5.513-11.18745,18.3697-17.96453,17.432C425.30335,201.103,416.54206,187.25309,415.05385,180.98352Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <path
        d="M674.01238,342.14754a7.1328,7.1328,0,0,0-4.80706-7.85363l-98.41317-32.77709a7.13219,7.13219,0,0,0-2.933-.3368l-24.66687,2.33267-14.15377,1.34255-26.11867,2.46833a7.15519,7.15519,0,0,0-6.38357,5.98973l-13.26135,82.8376a7.18646,7.18646,0,0,0,4.48439,7.79592l99.4404,38.38442a6.94669,6.94669,0,0,0,1.44636.38836,7.13621,7.13621,0,0,0,2.17571.01648l64.25546-9.52349a7.12057,7.12057,0,0,0,6.023-5.99919Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <path
        d="M490.01349,398.1102l99.44009,38.38234a.89711.89711,0,0,0,.457.05366l64.247-9.52224a.88347.88347,0,0,0,.7549-.75161l12.91979-85.06677a.90469.90469,0,0,0-.59937-.98151l-.66169-.22392-97.75762-32.54588a.67787.67787,0,0,0-.13742-.03318.88732.88732,0,0,0-.23-.01192l-60.16426,5.6932-4.77428.44794a.90314.90314,0,0,0-.7947.74781l-13.259,82.83439A.89735.89735,0,0,0,490.01349,398.1102Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#6c63ff"
      />
      <path
        d="M508.28194,313.10237l60.16426-5.6932a.88732.88732,0,0,1,.23.01192.67787.67787,0,0,1,.13742.03318l97.75762,32.54588-25.78658,2.72965-9.65046,1.01669-27.46045,2.90123a1.939,1.939,0,0,1-.24081-.0029c-.04881-.01472-.09762-.02944-.15639-.04511Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <path
        d="M487.75761,403.95209l99.44009,38.38233a6.72242,6.72242,0,0,0,1.4505.37968,7.22358,7.22358,0,0,0,2.17727.02722l64.247-9.52224a7.13521,7.13521,0,0,0,6.02839-6.00387l12.90982-85.06772a7.19014,7.19014,0,0,0-.4184-3.71669c-.06533-.15688-.13072-.31384-.207-.46172a6.99031,6.99031,0,0,0-2.26369-2.69758,7.13789,7.13789,0,0,0-1.91579-.97662l-.11659-.04131-98.29175-32.73751a8.95539,8.95539,0,0,0-1.22721-.29807,7.08573,7.08573,0,0,0-1.71463-.03323l-24.66295,2.32468-14.15253,1.35L502.917,307.3259a7.09173,7.09173,0,0,0-3.01853.99744,1.32948,1.32948,0,0,0-.20245.12125,1.1922,1.1922,0,0,0-.12992.09813,7.14818,7.14818,0,0,0-3.02682,4.76367l-13.2699,82.84346A7.19418,7.19418,0,0,0,487.75761,403.95209Zm10.54219-90.35694a5.29965,5.29965,0,0,1,1.26984-2.6713,4.65147,4.65147,0,0,1,.67571-.65875,5.31719,5.31719,0,0,1,2.32365-1.08389,4.059,4.059,0,0,1,.50915-.07189l43.98466-4.15521,20.96479-1.995c.14217-.01658.27254-.01418.40386-.02168a5.00673,5.00673,0,0,1,.94761.07043,4.14489,4.14489,0,0,1,.84467.20125l98.4084,32.77882c.07775.02754.14554.05407.22323.0816a5.218,5.218,0,0,1,2.27305,1.6537,5.25912,5.25912,0,0,1,1.12074,4.14541l-12.92068,85.07674a5.34916,5.34916,0,0,1-4.5086,4.50155l-64.257,9.52134a5.41346,5.41346,0,0,1-2.72281-.31038l-99.441-38.37237a5.40237,5.40237,0,0,1-3.35921-5.846Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#3f3d56"
      />
      <path
        d="M499.35216,308.99439a.87724.87724,0,0,1,.268-.38623,1.05132,1.05132,0,0,1,.129-.08817c.04169-.01607.08434-.04216.12611-.05828a.87349.87349,0,0,1,.62383-.01066l2.06994.73016,101.1157,35.66943,23.66513-2.5004,13.24288-1.39675,28.02932-2.96742,2.50639-.26279.48732-.05387a.9043.9043,0,0,1,.95216.65352.73938.73938,0,0,1,.02649.14313.893.893,0,0,1-.55014.92188.98843.98843,0,0,1-.24752.06673l-3.40944.35738-27.60268,2.91775-9.65046,1.01669-27.46045,2.90123a1.939,1.939,0,0,1-.24081-.0029c-.04881-.01472-.09762-.02944-.15639-.04511L500.24535,310.2651l-.3498-.1238a.67025.67025,0,0,1-.21942-.12146A.91016.91016,0,0,1,499.35216,308.99439Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#3f3d56"
      />
      <path
        d="M588.91905,442.97456a.89376.89376,0,0,1-.74251-1.01574l14.51687-96.33414a.894.894,0,0,1,1.017-.75056l.008.00129a.89377.89377,0,0,1,.74252,1.01574l-14.51687,96.33414a.894.894,0,0,1-1.017.75055Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#3f3d56"
      />
      <path
        d="M625.716,436.86342l-9.6548,1.01888,11.29337-95.5347s12.89458-2.33464,13.23951-1.39846C640.80631,341.50808,625.80805,436.25066,625.716,436.86342Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#3f3d56"
      />
      <polygon
        points="331.25 182.533 330.99 226.1 408.116 255.488 435.813 218.284 331.25 182.533"
        fill="#3f3d56"
      />
      <path
        d="M671.13144,337.72465a5.30105,5.30105,0,0,0-2.49688-1.73654l-98.40594-32.7777a5.10582,5.10582,0,0,0-.848-.20665,5.00894,5.00894,0,0,0-.95065-.07115l.15966-.99731.98511-.71323,23.36822-16.9188,78.04053,23.91705.13549,27.05154Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#3f3d56"
      />
      <path
        d="M503.829,380.07963a1.51326,1.51326,0,0,1,.326.06843l30.19365,9.91686a1.50014,1.50014,0,0,1-.93555,2.85069l-30.19364-9.91685a1.50039,1.50039,0,0,1,.60952-2.91913Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#fff"
      />
      <circle cx="457.00322" cy="423.23593" r="12" fill="#f2f2f2" />
      <circle cx="151.00322" cy="467.23593" r="12" fill="#f2f2f2" />
      <circle cx="401.00322" cy="70.23593" r="12" fill="#f2f2f2" />
      <path
        d="M589.34024,397.72852A11.59947,11.59947,0,0,1,573.433,389.7714L532.421,385.62792l13.53022-16.60628,36.87128,6.48065a11.66236,11.66236,0,0,1,6.5177,22.22623Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#ffb8b8"
      />
      <path
        d="M564.115,391.14082l-95.70849-8.81836-.13135-.15088L398.42455,302.135a32.95967,32.95967,0,0,1,8.01319-44.52344h0a32.92425,32.92425,0,0,1,48.14355,10.209l43.02246,75.54443,67.56543,27.147Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#e6e6e6"
      />
      <path
        d="M804.33859,237.22376c-2.37688-17.43387-5.35788-36.15172-17.65411-48.7369a41.34992,41.34992,0,0,0-59.74384.61837c-8.95079,9.54876-12.90365,22.95672-13.2654,36.03983s2.55205,26.02081,5.78442,38.70347a119.28958,119.28958,0,0,0,49.78577-9.79937c3.92617-1.70407,7.789-3.63056,11.93689-4.68634,4.14784-1.05571,7.10454,1.60088,10.96292,3.45335l2.118-4.05545c1.73377,3.22659,7.10244,2.27017,9.04978-.83224C805.26007,244.82608,804.83352,240.853,804.33859,237.22376Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
      <path
        d="M736.532,334.53244l-69.876,1.49441a11.05455,11.05455,0,1,0-4.93974,15.57383c9.26761.52674,81.77191,10.81733,86.0974,4.18549,4.39027-6.73106,27.82423-30.48612,27.82423-30.48612l-18.01271-25.64378Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#9e616a"
      />
      <circle cx="584.91096" cy="94.03525" r="32.83012" fill="#9e616a" />
      <path
        d="M599.36147,299.184"
        transform="translate(-168.64838 -127.60704)"
        fill="#6c63ff"
      />
      <path
        d="M806.14195,284.81075c-3.86888-7.69981-5.74873-17.212-13.99671-19.70823-5.56965-1.68563-28.09691.84048-33.17312,3.6859-8.44356,4.73313-.79189,13.60234-5.77332,21.90214-5.41517,9.02271-20.132,27.12978-25.5472,36.15241-3.72279,6.20279,8.8171,24.40947,6.80408,31.358-2.01273,6.94848-2.10962,14.74736,1.31952,21.11722,3.06888,5.70141-1.37137,10.745,1.71521,16.437,3.20957,5.91962,7.14849,28.05274,4.16119,34.08785l-2,6c19.84682,1.16609,36.53459-22.54427,56.25813-25.04188,4.89894-.62032,9.98565-1.43073,14.02251-4.27435,5.94639-4.18864,8.29717-11.78923,9.76638-18.91282A159.32576,159.32576,0,0,0,806.14195,284.81075Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#3f3d56"
      />
      <path
        d="M835.89793,366.11245c-2.76443-7.54563-7.769-40.5366-7.769-40.5366l-31.32417-.91848,15.31443,37.772-41.79036,58.50283s.07739.12853.21808.35778a11.052,11.052,0,1,0,9.26964,11.74483.76305.76305,0,0,0,.95807-.16445C785.42465,427.035,838.66236,373.65815,835.89793,366.11245Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#9e616a"
      />
      <path
        d="M839.0826,345.27741c-2.87511-12.13478-5.77152-24.33549-10.61887-35.82566s-11.78661-22.34286-21.54669-30.10543c-3.12048-2.48179-6.609-4.67232-10.52078-5.44389-3.91147-.77165-8.31967.09193-11.0667,2.98137-4.39621,4.62357-3.07339,12.0451-1.4611,18.21781Q791,322.40224,798.13123,349.70286q20.59418-2.18287,41.188-4.36591Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#3f3d56"
      />
      <path
        d="M793.7871,226.19592c-1.20908-7.942-2.47188-15.95043-5.31228-23.42857-2.8404-7.47821-7.41882-14.48249-13.98647-18.71882-10.39879-6.70709-23.862-5.41352-35.52074-1.55544-9.01622,2.9837-17.81761,7.51864-24.17574,14.8093-6.35848,7.29074-9.92957,17.69379-7.56439,27.22665q18.65464-4.40738,37.30893-8.81483l-1.36137.962a30.03765,30.03765,0,0,1,16.03083,20.8927,31.12209,31.12209,0,0,1-6.56554,25.84773q12.72244-4.51323,25.44489-9.0263c5.23526-1.85713,10.83833-3.997,13.94267-8.76047C795.62723,240.107,794.79091,232.78685,793.7871,226.19592Z"
        transform="translate(-168.64838 -127.60704)"
        fill="#2f2e41"
      />
    </svg>
  );
};
