import React from 'react';
import { useDoc } from "@docusaurus/theme-common/internal";

import DocItem from '@theme-original/DocItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function DocItemWrapper(props) {
  const isBrowser = useIsBrowser();

  // const { metadata } = useDoc()//error
  // const { frontMatter, slug, title } = metadata
  // const { enableComments } = frontMatter
  return (
    <>
      <DocItem {...props} />
        {/* {(enableComments) && ( */}
        <GiscusComponent />
      {/* )} */}
    </>
  );
}