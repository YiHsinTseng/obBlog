import React from 'react';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function BlogPostItemWrapper(props) {
  const isBrowser = useIsBrowser();
  
  const { metadata } = useBlogPost()
  const { frontMatter, slug, title } = metadata
  const { enableComments } = frontMatter

  return (
    <>
      <BlogPostItem {...props} />
      {(enableComments === "true") && (
        <GiscusComponent />
      )}
    </>
  );
}