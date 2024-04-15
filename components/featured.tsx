import React from 'react'
import { Link } from '@nextui-org/react'
import { SITE_CONFIG } from '@/config/site'
import { TwitterIcon, DiscordIcon, GithubIcon } from '@/components/icons'

export const Featured = () => {
    return (
        <div className='w-full flex justify-center items-center space-x-5 my-10'>
            <h2 className="text-center text-gray-400">Featured</h2>
            <div className="flex items-center space-x-5">
                <Link isExternal href={SITE_CONFIG.links.twitter} aria-label="Twitter">
                    <TwitterIcon className="text-default-500" />
                </Link>
                <Link isExternal href={SITE_CONFIG.links.discord} aria-label="Discord">
                    <DiscordIcon className="text-default-500" />
                </Link>
                <Link isExternal href={SITE_CONFIG.links.github} aria-label="Github">
                    <GithubIcon className="text-default-500" />
                </Link>
            </div>
        </div>
    )
}