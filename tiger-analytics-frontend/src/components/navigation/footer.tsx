"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { getImageUrl } from "@/lib/utils";
import { useQuery } from "@apollo/client/react";
import { FooterQueryResponse, Social } from "@/types/footer";
import { GET_FOOTER_DATA } from "@/lib/query/getFooterData";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from "../icons/social-icons";

export default function Footer() {
  const { data, loading } = useQuery<FooterQueryResponse>(GET_FOOTER_DATA);

  if (loading) return "Footer loading...";
  if (!data) return null;

  const {
    footer_logo,
    copyright_text,
    footer_links,
    legal_links,
    newsletter,
    socials,
    about_template,
  } = data.footers[0];

  return (
    <footer className="bg-neutral-100 px-4 py-8">
      <div className="mx-auto space-y-2">
        <div className="rounded-3xl bg-[#0F1415] px-8 py-12 md:px-12 md:py-16">
          <div className="flex flex-col xl:flex-row gap-8 md:gap-16 xl:gap-12">
            <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-20">
              {footer_logo && (
                <div className="min-w-[200px] lg:min-w-0 2xl:min-w-3xs shrink-0">
                  <Link href="/" className="flex items-center">
                    <Image
                      src={getImageUrl(footer_logo.url) ?? ""}
                      alt="Tiger Analytics logo"
                      width={140}
                      height={44}
                      className="h-10 2xl:h-14 w-auto brightness-0 invert"
                    />
                  </Link>
                </div>
              )}

              <ul className="w-full flex flex-wrap lg:flex-nowrap gap-8 lg:gap-20">
                {footer_links?.map((group) => (
                  <li
                    key={group.id}
                    className="flex-1 min-w-[200px] lg:min-w-0 min-[1700px]:min-w-3xs"
                  >
                    <h3 className="mb-4 text-lg font-semibold text-background">
                      {group.label}
                    </h3>
                    <ul className="space-y-3">
                      {group.sub_menu_links?.map((link) => {
                        const { link: cta_link, target, label } = link;
                        return (
                          <li key={cta_link}>
                            <Link
                              rel={
                                target === "blank"
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              target={target === "blank" ? "_blank" : "_self"}
                              href={cta_link ?? ""}
                              className="text-muted-foreground"
                            >
                              {label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 md:max-w-sm md:self-end ml-auto xl:self-start xl:max-w-[400px] ">
              {newsletter && (
                <div
                  className=" text-lg font-semibold text-white"
                  dangerouslySetInnerHTML={{
                    __html: newsletter.newsletter_text as string,
                  }}
                />
              )}
              {newsletter && (
                <div
                  className="text-sm text-neutral-400 leading-relaxed lg:text-base"
                  dangerouslySetInnerHTML={{
                    __html: newsletter.newsletter_subtext as string,
                  }}
                />
              )}

              {newsletter.show_subscribe_field && (
                <NewsletterSubscriptionForm
                  label={newsletter.btn_text}
                  email_field_placeholder={
                    newsletter.placeholder_text ?? "joe@123.com"
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            {copyright_text && (
              <div
                dangerouslySetInnerHTML={{
                  __html: copyright_text as string,
                }}
                className="text-sm text-neutral-500 underline"
              />
            )}
            <div className="flex gap-6">
              {legal_links?.map((link) => {
                const { url, id, target, label } = link;
                return (
                  <Link
                    key={id}
                    rel={target === "blank" ? "noopener noreferrer" : undefined}
                    target={target === "blank" ? "_blank" : "_self"}
                    href={url ?? ""}
                    className="text-sm text-neutral-500 font-normal hover:no-underline hover:text-neutral-700"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex gap-4">
            {socials?.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.url as string}
                  className="text-neutral-500 hover:text-neutral-700 transition-colors"
                  aria-label={item.platform}
                >
                  <SocialIcon icon={item.platform} />
                  <span className="sr-only">{item.platform}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-4 rounded-3xl flex justify-between items-center bg-[#0F1415] px-8 py-6 md:px-12">
          <div>
            <h3 className="text-sm text-[#838383]">
              {about_template?.[0].design_by}
            </h3>
          </div>

          <div>
            {about_template?.[0]?.releavant_links.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.url as string}
                  target={link.target === "_blank" ? "_blank" : "_self"}
                  rel={
                    link.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-neutral-500 hover:text-neutral-300 text-sm transition-colors"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

const NewsletterSubscriptionForm = ({
  label,
  email_field_placeholder,
}: {
  label?: string;
  email_field_placeholder: string;
}) => {
  const schema = z.object({
    email: z.email().min(1, { message: "Email is required" }),
  });

  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex flex-col flex-1 relative">
              <FormLabel className="sr-only">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={email_field_placeholder ?? "joe@123.com"}
                  className="h-full rounded-r-none bg-neutral-700 border-neutral-600 text-white placeholder:text-neutral-400 focus:border-orange-500 focus:ring-orange-500"
                />
              </FormControl>
              <FormMessage className="absolute -bottom-6 left-0" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="text-sm font-normal capitalize rounded-l-none bg-orange-500 hover:bg-orange-600 text-white px-6"
        >
          {label ?? "Subscribe"}
        </Button>
      </form>
    </Form>
  );
};

const SocialIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case "facebook":
      return <FacebookIcon className="h-6 w-6 text-muted-foreground" />;
    case "twitter":
      return <TwitterIcon className="h-6 w-6 text-muted-foreground" />;
    case "instagram":
      return <InstagramIcon className="h-6 w-6 text-muted-foreground" />;
    case "linkedin":
      return <LinkedInIcon className="h-6 w-6 text-muted-foreground" />;
    case "youtube":
      return <YouTubeIcon className="h-6 w-6 text-muted-foreground" />;
  }
};
