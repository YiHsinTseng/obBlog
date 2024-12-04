import React from 'react';
import { useBlogPost } from '@docusaurus/theme-common/internal'
import BlogPostItem from '@theme-original/BlogPostItem';
import GiscusComponent from '@site/src/components/GiscusComponent';

export default function BlogPostItemWrapper(props) {  
  const { metadata } = useBlogPost()
  const { frontMatter, permalink } = metadata
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