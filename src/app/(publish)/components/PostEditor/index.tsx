'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/react/style.css';
import {
  Button,
  Close,
  Dropdown,
  Input,
  NavigationIcons,
  Pencil,
  StickerStar,
  Switch,
} from '@/components/Common';
import { usePortal } from '@/hooks';
import { PostDetailResponse } from '@/app/blog/[blogId]/post/[postId]/components/PostDetailFetcher/types';
import StickerPannel from '../StickerPannel';
import { useHashtags, useWritePost } from '../../hooks';
import { CATEGORIES } from '../../constants';

const Konva = dynamic(() => import('../Konva'), {
  ssr: false,
});
const Editor = dynamic(() => import('@/components/Common/Editor'), {
  ssr: false,
});

interface PostEditorProp {
  postDetail?: Partial<PostDetailResponse['postDetail']>;
}

export default function PostEditor({ postDetail = {} }: PostEditorProp) {
  const {
    title = '',
    categoryName = '카테고리 선택',
    content,
    hashtags: initialData = [],
  } = postDetail;

  const port = usePortal({ id: 'publish-container' });

  const [editable, setEditable] = useState<boolean>(true);
  const [editedTitle, setEditedTitle] = useState<string>(title);
  const [editedCateogryName, setEditedCategoryName] =
    useState<string>(categoryName);

  const { getInputProps, handleDelete, hashtags } = useHashtags({
    initialData,
  });
  const { handleSubmitPost } = useWritePost();

  return (
    <section className="relative flex justify-center">
      {port?.(
        <div className="flex gap-20">
          <Switch
            checked={editable}
            handleChange={() => setEditable((prev) => !prev)}
            LeftIcon={
              <StickerStar className="w-13 h-13 absolute top-[4.5px] left-5 z-10" />
            }
            RightIcon={
              <Pencil
                color={editable ? '#F08D53' : '#999999'}
                className="w-13 h-13 absolute top-[4.5px] right-[5.5px] z-10"
              />
            }
          />

          <NavigationIcons />

          <div className="flex gap-12 font-pretendard font-medium">
            {/* TODO: 글 업로드 */}
            <Button
              className="bg-[#E3E3E3] w-60 h-30"
              onClick={() =>
                handleSubmitPost({
                  title: editedTitle,
                  categoryName: editedCateogryName,
                })
              }
            >
              저장
            </Button>
            <Button
              className="bg-primary text-[white] w-60 h-30"
              onClick={() =>
                handleSubmitPost(
                  { title: editedTitle, categoryName: editedCateogryName },
                  'publish',
                )
              }
            >
              발행
            </Button>
          </div>
        </div>,
      )}

      <StickerPannel editable={editable} setEditable={setEditable} />

      <Konva enable={!editable} />

      <section className="w-[620px]">
        <Input
          wrapperClassName="px-45"
          className="outline-none placeholder:text-[#999] text-36"
          placeholder="제목을 입력해주세요."
          value={title}
          onValueChange={setEditedTitle}
        />

        <div className="h-1 bg-[#D8D8D8] mx-45" />

        <div className="flex justify-end">
          <Dropdown
            onChange={setEditedCategoryName}
            classNames={{
              base: 'mt-10 mr-45',
              menu: 'top-60 shadow-[0px_4px_14px_0px_rgba(0,0,0,0.10)] rounded-8',
            }}
          >
            <Dropdown.Trigger className="bg-white w-full rounded-8 h-50 border-1 border-[#EBEBEB]">
              {editedCateogryName}
            </Dropdown.Trigger>

            <Dropdown.Menu>
              {CATEGORIES.map(({ title: categoryTitle }, index) => (
                <>
                  <Dropdown.Item
                    key={categoryTitle}
                    value={categoryTitle}
                    className="h-44 bg-white"
                  >
                    {categoryTitle}
                  </Dropdown.Item>
                  {index < CATEGORIES.length - 1 && (
                    <div className="w-full h-1 bg-[#EBEBEB]" />
                  )}
                </>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Editor
          className="w-full min-h-[500px] rounded-[4px] py-10 mt-10"
          initialData={content}
        />

        <div className="flex items-center mx-45 border-t-1 border-[#EBEBEB]">
          <div>
            {hashtags.map((hashtag, index) => (
              // eslint-disable-next-line
              <span key={index} className="mr-2">
                #{hashtag}
                {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                <button type="button" onClick={() => handleDelete(index)}>
                  <Close className="ml-3 mt-1 h-12" />
                </button>
              </span>
            ))}
          </div>

          {hashtags.length <= 3 && <Input {...getInputProps()} />}
        </div>
      </section>
    </section>
  );
}
