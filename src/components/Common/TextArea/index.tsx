'use client';

import { forwardRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { UseTextAreaProps, useTextArea } from './useTextArea';

export type TextareaHeightChangeMeta = {
  rowHeight: number;
};

export interface TextAreaProps extends UseTextAreaProps {
  minRows?: number;
  maxRows?: number;
  cacheMeasurements?: boolean;
  onHeightChange?: (height: number, meta: TextareaHeightChangeMeta) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      minRows = 1,
      maxRows = 14,
      cacheMeasurements = false,
      onHeightChange,
      ...otherProps
    },
    ref,
  ) => {
    const { Component, getBaseProps, getInputProps } = useTextArea({
      ...otherProps,
      ref,
    });

    const handleHeightChange = (
      height: number,
      meta: TextareaHeightChangeMeta,
    ) => {
      onHeightChange?.(height, meta);
    };

    return (
      <Component {...getBaseProps()}>
        <TextareaAutosize
          {...getInputProps()}
          cacheMeasurements={cacheMeasurements}
          maxRows={maxRows}
          minRows={minRows}
          onHeightChange={handleHeightChange}
        />
      </Component>
    );
  },
);

TextArea.displayName = 'Glue-TextArea';

export default TextArea;
