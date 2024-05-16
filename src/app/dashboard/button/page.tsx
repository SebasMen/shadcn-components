'use client';

import { ChevronRightIcon, ReloadIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-2">

      <Button>default</Button>

      <Button variant="destructive">destructive</Button>

      <Button variant="ghost">ghost</Button>

      <Button variant="link">link</Button>

      <Button variant="outline">outline</Button>
      
      <Button variant="secondary">secondary</Button>
      
      <Button disabled>disabled</Button>

      <Button onClick={() => console.log('clicked')}>Click Me</Button>

      <Button variant="success">Success</Button>

      <Button capitalize={false}>capitalize false</Button>

      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
}