import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ArrowRightIcon, ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { GridCard } from "@/components/ui/grid-card";

type NavItemType = {
  title: string;
  href: string;
  description?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "group inline-flex w-max items-center justify-center rounded-[10px] px-4 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white/90 focus:bg-white/10 focus:text-white/90 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-white/10 data-[state=open]:text-white/90",
        className,
      )}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto",
        "group-data-[viewport=false]/navigation-menu:bg-white/[0.03] group-data-[viewport=false]/navigation-menu:text-white group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-2 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-2xl group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:border-white/10 group-data-[viewport=false]/navigation-menu:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] group-data-[viewport=false]/navigation-menu:duration-300 group-data-[viewport=false]/navigation-menu:backdrop-blur-2xl **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute top-full left-0 isolate z-50 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "origin-top-center bg-white/[0.03] text-white relative mt-2 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:w-[var(--radix-navigation-menu-viewport-width)]",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus-visible:outline-none flex flex-col justify-center gap-1 rounded-[10px] px-4 py-2 text-sm text-white/70 transition-all [&_svg:not([class*='text-'])]:text-white/40 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className,
      )}
      {...props}
    >
      <div className="bg-white/20 relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm" />
    </NavigationMenuPrimitive.Indicator>
  );
}

function NavGridCard({
  link,
  ...props
}: React.ComponentProps<"div"> & {
  link: NavItemType;
}) {
  return (
    <NavigationMenuPrimitive.Link asChild>
      <GridCard {...props}>
        {link.icon && (
          <link.icon className="text-white/80 relative size-5" />
        )}
        <div className="relative">
          <span className="text-white/90 text-sm font-medium">
            {link.title}
          </span>
          {link.description && (
            <p className="text-white/50 mt-2 text-xs">{link.description}</p>
          )}
        </div>
      </GridCard>
    </NavigationMenuPrimitive.Link>
  );
}

function NavSmallItem({
  item,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
  item: Omit<NavItemType, "description">;
}) {
  return (
    <NavigationMenuLink
      className={cn(
        "group relative h-max flex-row items-center gap-x-3 px-2 py-2",
        className,
      )}
      {...props}
    >
      {item.icon && <item.icon className="text-white/70" />}
      <p className="text-sm text-white/80">{item.title}</p>
      <div className="relative ml-auto flex h-full w-4 items-center">
        <ArrowRightIcon className="size-4 -translate-x-2 text-white/40 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
    </NavigationMenuLink>
  );
}

function NavLargeItem({
  link,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuLink> & {
  link: NavItemType;
}) {
  return (
    <NavigationMenuLink
      className={cn(
        "bg-white/[0.02] group relative flex flex-col justify-center border border-white/10 rounded-xl p-0",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <div className="space-y-1">
          <span className="text-sm leading-none font-medium text-white/90">
            {link.title}
          </span>
          {link.description && (
            <p className="text-white/50 line-clamp-1 text-xs">
              {link.description}
            </p>
          )}
        </div>
        {link.icon && <link.icon className="text-white/50 size-6" />}
      </div>
    </NavigationMenuLink>
  );
}

function NavItemMobile({
  item,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  item: NavItemType;
}) {
  return (
    <a
      className={cn(
        "hover:bg-white/10 focus:bg-white/10 focus:text-white focus-visible:outline-none group relative flex gap-x-2 rounded-xl p-2 text-sm text-white/70 transition-all [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "bg-white/5 flex size-10 items-center justify-center rounded-xl border border-white/10",
        )}
      >
        {item.icon && <item.icon className="text-white/70" />}
      </div>
      <div className={cn("flex h-10 flex-col justify-center")}>
        <p className="text-sm text-white/90">{item.title}</p>
        <span className="text-white/50 line-clamp-1 text-xs leading-snug">
          {item.description}
        </span>
      </div>
    </a>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  NavGridCard,
  NavSmallItem,
  NavLargeItem,
  NavItemMobile,
  type NavItemType,
};
