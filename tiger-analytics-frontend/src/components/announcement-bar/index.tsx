'use client';

import React, { useState } from 'react';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AnnouncementBar({ data }: { data: any }) {
	const [isVisible, setIsVisible] = useState(true);

	// if (!isVisible) return null;
	// const shouldShowCloseButton = blok.show_close_button;
	// const html = blok.content as unknown as StoryblokRichTextNode;

	return (
		<div className='relative flex items-center justify-center py-2 bg-black text-white px-4 text-center text-sm md:text-base z-[51] pointer-events-auto'>
			<div className='pr-3'>LEAD THE PACK WITH TIGER-DRIVEN INSIGHTS, TRANSFORMING CUSTOMER SERVICE AT PIONEER 2024. REGISTER NOW</div>
			{/* {!shouldShowCloseButton && ( */}
				<Button
					variant='default'
					size='icon'
					onClick={() => setIsVisible(false)}
					aria-label='Close banner'
					className='absolute right-4 p-1.5 w-auto h-auto rounded bg-transparent cursor-pointer text-white hover:bg-white/5'>
					<XIcon aria-hidden='true' className='w-4 h-4' />
					<span className='sr-only'>Close</span>
				</Button>
			{/* )} */}
		</div>
	);
}
