import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LeferiPointWhite from "src/assets/fonts/LeferiPointWhite.ttf";
import LeferiBaseBold from "src/assets/fonts/LeferiBaseBold.ttf";

const globalStyles = createGlobalStyle`
    ${reset};
	@font-face {
		font-family: "LeferiPointWhite";
		src: local("LeferiPointWhite"),
		url(${LeferiPointWhite}) format('truetype');
		font-weight: normal;
	}
	@font-face {
		font-family: "LeferiBaseBold";
		src: local("LeferiBaseBold"),
		url(${LeferiBaseBold}) format('truetype');
		font-weight: bold;
	}
	* {
		box-sizing: border-box;
		scroll-behavior: smooth;	
	}
	body {
		margin: 0;
		font-family: "Noto Sans KR", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		monospace;
	}
	a {
		text-decoration:none;
		&:hover {
		text-decoration: 1px underline;
		text-underline-position: under;
	}
		margin-right: 0.5rem;
		color: #428cc5;
	}
	hr{
		border: 1px solid #efefef;
	}
	.tab {
		border-radius: 20px 20px 0px 0px;
	}
	.normal {
		font-weight: 400;
	}
	.bold {
		font-weight: 700;
	}
	h1,
	h2,
	h3,
	h4 {
		margin: 0;
		padding: 0;
	}
	h1 {		
		font-weight: bold;
	}
	h2 {		
		font-weight: bold;
	}
	h3 {		
		font-weight: bold;
	}
	h4 {		
		font-weight: bold;
	}
	.must:before {
		content: '*';
		color: #c91c1c;
	}
	.f-10 {
		font-size: 10px;
	}
	.f-12 {
		font-size: 12px;
	}
	.f-14 {
		font-size: 14px;
	}
	.f-16 {
		font-size: 16px;
	}
	.f-18 {
		font-size: 18px;
	}
	.f-20 {
		font-size: 20px;
	}
	.f-24 {
		font-size: 24px;
	}
	.f-30 {
		font-size: 30px;
	}
	.f-32 {
		font-size: 32px;
	}

	.col-1 {
		width: 72.5px;
	}
	.col-2 {
		width: 175px;
	}
	.col-3 {
		width: 277.5px;
	}
	.col-4 {
		width: 380px;
	}
	.col-5 {
		width: 482.5px;
	}
	.col-6 {
		width: 585px;
	}
	.col-7 {
		width: 687.5px;
	}
	.col-8 {
		width: 790px;
	}
	.col-9 {
		width: 892.5px;
	}
	.col-10 {
		width: 995px;
	}
	.col-11 {
		width: 1097.5px;
	}
	.col-12 {
		width: 1200px;
	}

	.w-full {
		width: 100%;
	}

	.w-half {
		width:50%;
	}

	.mt-8 {
		margin-top: 8px;
	}
	.mt-16 {
		margin-top: 16px;
	}
	.mt-24 {
		margin-top: 24px;
	}
	.mt-32 {
		margin-top: 32px;
	}
	.mt-40 {
		margin-top: 40px;
	}
	.mt-48 {
		margin-top: 48px;
	}
	.mt-56 {
		margin-top: 56px;
	}
	.mt-100 {
		margin-top: 100px;
	}
	.mb-8 {
		margin-bottom: 8px;
	}
	.mb-16 {
		margin-bottom: 16px;
	}
	.mb-24 {
		margin-bottom: 24px;
	}
	.mb-32 {
		margin-bottom: 32px;
	}
	.mb-40 {
		margin-bottom: 40px;
	}
	.mb-48 {
		margin-bottom: 48px;
	}
	.mb-56 {
		margin-bottom: 56px;
	}
	.mb-100 {
		margin-bottom: 100px;
	}

	.mr-8 {
		margin-right: 8px;
	}
	.mr-16 {
		margin-right: 16px;
	}
	.mr-24 {
		margin-right: 24px;
	}
	.mr-32 {
		margin-right: 32px;
	}
	.mr-40 {
		margin-right: 40px;
	}
	.mr-48 {
		margin-right: 48px;
	}
	.mr-56 {
		margin-right: 56px;
	}
	.mr-100 {
		margin-right: 100px;
	}

	.p-8{
		padding: 8px;
	}
	.pb-8 {
		padding-bottom: 8px;
	}
	.pb-16 {
		padding-bottom: 16px;
	}
	.pb-24 {
		padding-bottom: 24px;
	}
	.pb-32 {
		padding-bottom: 32px;
	}
	.pb-40 {
		padding-bottom: 40px;
	}
	.pb-48 {
		padding-bottom: 48px;
	}
	.pb-56 {
		padding-bottom: 56px;
	}
	.pb-72 {
		padding-bottom: 72px;
	}
	.pb-100 {
		padding-bottom: 100px;
	}

	.pt-8 {
		padding-top: 8px;
	}
	.pt-16 {
		padding-top: 16px;
	}
	.pt-24 {
		padding-top: 24px;
	}
	.pt-32 {
		padding-top: 32px;
	}
	.pt-40 {
		padding-top: 40px;
	}
	.pt-48 {
		padding-top: 48px;
	}
	.pt-56 {
		padding-top: 56px;
	}
	.pt-72 {
		padding-top: 72px;
	}
	.pt-100 {
		padding-top: 100px;
	}

	.pl-8 {
		padding-left: 8px;
	}
	.pl-16 {
		padding-left: 16px;
	}
	.pl-24 {
		padding-left: 24px;
	}
	.pl-32 {
		padding-left: 32px;
	}
	.pl-40 {
		padding-left: 40px;
	}
	.pl-48 {
		padding-left: 48px;
	}
	.pl-56 {
		padding-left: 56px;
	}
	.pl-72 {
		padding-left: 72px;
	}
	.pl-100 {
		padding-left: 100px;
	}

	.pr-8 {
		padding-right: 8px;
	}
	.pr-16 {
		padding-right: 16px;
	}
	.pr-24 {
		padding-right: 24px;
	}
	.pr-32 {
		padding-right: 32px;
	}
	.pr-40 {
		padding-right: 40px;
	}
	.pr-48 {
		padding-right: 48px;
	}
	.pr-56 {
		padding-right: 56px;
	}
	.pr-72 {
		padding-right: 72px;
	}
	.pr-100 {
		padding-right: 100px;
	}

	.pointer {
		cursor: pointer;
	}

	.gap-30 {
		gap: 30px;
	}
	.gap-4 {
		gap: 4px;
	}
	.gap-8 {
		gap: 8px;
	}
	.gap-12 {
		gap: 12px;
	}
	.gap-16 {
		gap: 16px;
	}
	.gap-24 {
		gap: 24px;
	}
	.gap-32 {
		gap: 32px;
	}
	.gap-40 {
		gap: 40px;
	}
	.gap-48 {
		gap: 48px;
	}

	.grid-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: min-content;
	}
	.grid-3 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: min-content;
	}
	.grid-4 {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-template-rows: min-content;
	}

	.flex {
		display: flex;
	}
	.column {
		display: flex;
		flex-direction: column;
	}

	.wrap{	
		flex-wrap: wrap;
	}

	.row {
		display: flex;
		flex-direction: row;
	}

	.justify-center {
		display:flex; 
		justify-content: center;
	}
	.justify-end{
		display:flex;
		justify-content: end;
	}

	.items-start {
		align-items: flex-start;
	}
	.items-center {
		align-items: center;
	}

	.self-center {
		display: flex;
		align-self: center;
	}
	.self-end {
		display: flex;
		align-self: end;
	}

	.justify-between {
		display: flex;
		justify-content: space-between;
		width: 100%;
	}

	.center {
		display: flex;
		justify-content: center;		
		align-items: center;
	}
	.end {
		display: flex;
		align-items: end;
	}

	.black{
		color: black;
	}
	.basic-blue{
		color: #3182fb;
	}
	.highlight{
		color:#2652c5;
	}
	.blue {
		color: #0053fd;
	}
	.new-blue {
		color: #aebddd;
	}
	.red {
		color: #c91c1c;
	}
	.new-red {
		color: #ff7373;
	}
	.white {
		color: #ffffff;
	}
	.gray {
		color: #a8a8a8;
	}
	.gray-dark {
		color: #464646;
	}
	.gray-light {
		color: #f8f8f8;
	}
	.yellow {
		color: #e3c918;
	}
	.green {
		color: #3eaf87;
	}

	.bg-newblue {
		background-color: #aebddd;
	}
	.bg-blue {
		background-color: #0053fd;
	}
	.bg-white {
		background-color: #ffffff;
	}
	.bg-red {
		background-color: #c91c1c;
	}
	.bg-green {
		background-color: #3eaf87;
	}
	.bg-gray {
		background-color: #a8a8a8;
	}
	.bg-gray-light {
		background-color: #dddddd;
	}

	.bg-cool-gray {
		background-color: #f8f9fb;
	}

	.ol-blue {
		border: 1px solid #0053fd;
	}
	.ol-gray {
		border: 1px solid #a8a8a8;
	}

	.tiny {
		height: 30px;
	}
	.small {
		height: 40px;
	}
	.large {
		height: 56px;
	}
	.large-min {
		min-height: 56px;
	}
	.large-circle {
		border-radius: 24px;
		height: 48px;
		width: 48px;
	}
	.circle {
		border-radius: 16px;
		height: 32px;
		width: 32px;
	}
	.small-circle {
		border-radius: 8px;
		height: 16px;
		width: 16px;
	}
	.underline {
		text-decoration: underline;
	}
	.hidden {
		position: absolute;
		width: 0;
		height: 0;
		padding: 0;
		overflow: hidden;
		border: 0;
	}
	:root {
		--color-black-text1: #1F1F1F;
		--color-black-text2: #3B3B3B;
		--color-gray-text1: #878787;

		--color-gray-1: #6C6C6C;
		--color-gray-2: #A2A2A2;
		--color-gray-3: #ECECEC;

		--color-gray-border1 :rgba(0,0,0,0.08);
		--color-gray-border2 : rgba(0,0,0,0.3);
		--color-gray-border2-hover: rgba(0,0,0,0.4);
		--color-white-bg: #EEEEEE;
		--color-white-bg: #ffffff;
		--color-gray-bg: #F0F0F0;
		
		--font-size-10: 10px;
		--font-size-12: 12px;
		--font-size-14: 14px;
		--font-size-16: 16px;
		--font-size-18: 18px;
		--font-size-20: 20px;
  }
`;

export default globalStyles;
