import React from 'react';
import { useDoc } from "@docusaurus/theme-common/internal";

import GiscusComponent from '@site/src/components/GiscusComponent';

import Footer from "@theme-original/DocItem/Footer";
import type FooterType from "@theme/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";
type Props = WrapperProps<typeof FooterType>;

export default function DocItemWrapper(props){

  const { metadata } = useDoc()
  const { frontMatter, permalink } = metadata
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