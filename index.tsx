import React from 'react';
import {parse, setOptions} from 'marked';
import { render, Text } from 'ink';
import TerminalRenderer, { TerminalRendererOptions } from 'marked-terminal';


import { Markdown } from 'ink-markdown';

/*export type Props = TerminalRendererOptions & {
  children: string;
};

export default function Markdown({ children, ...options }: Props) {
  setOptions({ renderer: new TerminalRenderer(options) });
  return <Text>{parse(children).trim()}</Text>;
}*/

const text = `
# blah

this is some random *text*
`;

render(<Markdown>{text}</Markdown>);
