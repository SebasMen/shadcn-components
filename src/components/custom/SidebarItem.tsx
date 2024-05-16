import Link from 'next/link';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

import { ISidebar } from '@/interfaces';

interface Props extends ISidebar {}

export const SidebarItem = ({ name, href, subRoutes }: Props) => {
  const hasSubRoutes = subRoutes && subRoutes.length > 0;

  if (hasSubRoutes) {
    return (
      <Accordion type="multiple" className="w-full" >
        <AccordionItem
          value={name}
          className="border-0"  
        >
          <AccordionTrigger
            className="group text-base capitalize text-gray-900 font-normal rounded-lg p-2 hover:no-underline hover:bg-gray-100"
          >
            <span className="ml-3">{ name }</span>
          </AccordionTrigger>

          <AccordionContent>
            {subRoutes.map((subRoute) => (
              <Link
                key={subRoute.href}
                href={subRoute.href}
                className="text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
              >
                <span className="ml-6">{subRoute.name}</span>
              </Link>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }

  return (
    <li key={href}>
      <Link
        href={href}
        className="text-base capitalize text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
      >
        <span className="ml-3">{name}</span>
      </Link>
    </li>
  )
}
