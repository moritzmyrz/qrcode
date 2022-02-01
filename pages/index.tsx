import { Button, TextField } from '@mui/material';
import { ColorPicker, createColor } from 'mui-color';
import type { NextPage } from 'next';
import QRCode from 'qrcode.react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Home: NextPage = () => {
	const [url, setUrl] = useState<string>('https://www.google.com');
	const [fGColor, setFGColor] = useState(createColor('black'));
	const [bGColor, setBGColor] = useState(createColor('white'));

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{ url: string }>();

	const onSubmit = (e: any) => setUrl(e.url);

	return (
		<div className="bg-gray-900 text-white h-screen flex flex-nowrap justify-center items-center">
			<div className="flex flex-col items-center space-y-2">
				<form
					className="bg-gray-800 p-4 rounded-lg flex flex-col space-y-2"
					onSubmit={handleSubmit(onSubmit)}
				>
					<h1 className="text-3xl font-bold">QR Code Generator</h1>
					<TextField
						variant="outlined"
						{...register('url', {
							required: true,
						})}
						defaultValue={'https://www.google.com'}
						type="url"
					/>
					<ColorPicker value={fGColor} onChange={(c: any) => setFGColor(c)} />
					<ColorPicker value={bGColor} onChange={(c: any) => setBGColor(c)} />
					<Button type="submit">Generate</Button>
				</form>
				<QRCode
					bgColor={`#${bGColor.hex}`}
					fgColor={`#${fGColor.hex}`}
					level="L"
					size={256}
					value={url}
				/>
			</div>
		</div>
	);
};

export default Home;
