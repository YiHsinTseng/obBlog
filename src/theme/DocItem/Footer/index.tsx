import React from 'react';
import { useDoc } from "@docusaurus/plugin-content-docs/client";

// import DocItem from '@theme-original/DocItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
// import useIsBrowser from '@docusaurus/useIsBrowser';

import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";
type Props = WrapperProps<typeof FooterType>;

export default function DocItemWrapper(props):JSX.Element {
  // const isBrowser = useIsBrowser();

  const { metadata } = useDoc()//error
  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter
  return (
    <>
      <Footer {...props} />
        {(enableComments==="true") && (
        <GiscusComponent />
      )}
    </>
  );
}