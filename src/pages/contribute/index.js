import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

const DEFAULT_TEMPLATE = 'howTo';

const TEMPLATES = {
  howTo: {
    label: {
      'en-US': 'How-to Guide',
      'ja-JP': '操作ガイド',
    },
    html: `
      <h1>How to complete the task</h1>
      <p>Start with a short overview that explains the goal and the outcome.</p>
      <h2>Before you begin</h2>
      <ul>
        <li>List prerequisites</li>
        <li>List permissions or tools needed</li>
      </ul>
      <h2>Steps</h2>
      <ol>
        <li>Describe the first step clearly.</li>
        <li>Describe the next step and expected outcome.</li>
        <li>Close with what success looks like.</li>
      </ol>
    `,
  },
  troubleshooting: {
    label: {
      'en-US': 'Troubleshooting',
      'ja-JP': 'トラブルシューティング',
    },
    html: `
      <h1>Troubleshooting issue name</h1>
      <p>Summarize the issue and when it appears.</p>
      <h2>Symptoms</h2>
      <ul>
        <li>What the user sees</li>
        <li>What the system does</li>
      </ul>
      <h2>Likely causes</h2>
      <ul>
        <li>Cause 1</li>
        <li>Cause 2</li>
      </ul>
      <h2>Resolution</h2>
      <ol>
        <li>Explain the first check.</li>
        <li>Explain how to resolve the issue.</li>
      </ol>
    `,
  },
  faq: {
    label: {
      'en-US': 'FAQ',
      'ja-JP': 'FAQ',
    },
    html: `
      <h1>Frequently asked questions</h1>
      <h2>Question one?</h2>
      <p>Answer the question clearly and directly.</p>
      <h2>Question two?</h2>
      <p>Add another answer with context and examples.</p>
    `,
  },
  runbook: {
    label: {
      'en-US': 'Runbook',
      'ja-JP': 'ランブック',
    },
    html: `
      <h1>Runbook title</h1>
      <p>Summarize when this runbook should be used.</p>
      <h2>Trigger</h2>
      <p>Describe the trigger or incident condition.</p>
      <h2>Actions</h2>
      <ol>
        <li>First response action</li>
        <li>Second response action</li>
        <li>Escalation path</li>
      </ol>
      <blockquote>Call out critical warnings or approvals here.</blockquote>
    `,
  },
  policy: {
    label: {
      'en-US': 'Policy / Reference',
      'ja-JP': 'ポリシー / リファレンス',
    },
    html: `
      <h1>Policy title</h1>
      <p>State the policy or reference summary.</p>
      <h2>Scope</h2>
      <p>Explain what teams, systems, or cases are covered.</p>
      <h2>Requirements</h2>
      <ul>
        <li>Requirement 1</li>
        <li>Requirement 2</li>
      </ul>
    `,
  },
};

const COPY = {
  'en-US': {
    title: 'Contribute to the Knowledge Center',
    subtitle:
      'Turn your process, guide, or operating insight into a publish-ready article with a familiar writing surface and a guided submission flow.',
    metadata: 'Article Setup',
    content: 'Editor',
    preview: 'Preview',
    readiness: 'Submission Readiness',
    modalTitle: 'Send Publishing Request',
    download: 'Download Markdown File',
    email: 'Open Email Draft',
    send: 'Send Publishing Request',
    linkedImageError: 'Please upload the images in the publishing request',
    previewHelp: 'Preview your article as it will appear after publishing.',
    fieldLabels: {
      title: 'Document Title',
      author: 'Author Name',
      team: 'Team / Function',
      summary: 'Summary',
      audience: 'Intended Audience',
      location: 'Suggested Knowledge Center Location',
      videoLinks: 'Video Links',
      notes: 'Notes to Reviewer',
    },
    fieldHelp: {
      location:
        'Paste the URL of the page or section where you believe this content belongs.',
      videoLinks: 'Add one video URL per line if the article references recordings or demos.',
    },
    readinessItems: {
      metadata: 'Required metadata complete',
      location: 'Suggested location URL is valid',
      markdown: 'Markdown is ready to export',
      images: 'Linked images are valid or flagged for attachment',
    },
    modalSteps: [
      'Download the Markdown file.',
      'Open the email draft to jyp4013@yum.com.',
      'Attach the Markdown file and any relevant images.',
      'Send the publishing request.',
    ],
    templateLabel: 'Start from a template',
    helperBar: 'Use the toolbar to shape the article, add links, insert image URLs, and prepare a clean submission package.',
    imageHealthEmpty: 'No linked images in the article yet.',
    close: 'Close',
    draftTitle: 'Untitled draft',
    draftSummary: 'Add a short summary so reviewers understand the article intent.',
    authorPending: 'Author pending',
    teamPending: 'Team pending',
    audiencePending: 'Audience pending',
    checking: 'Checking...',
    ready: 'Ready',
    previewShow: 'Show Preview',
    previewHide: 'Hide Preview',
    hiddenPreviewHint: 'Preview is hidden so you can focus on writing. Open it anytime to check the final rendering.',
    heroEyebrow: 'Knowledge Center Publishing Studio',
    heroFlow: 'Draft → Preview → Download → Email',
    structuredStarter: 'Structured starter',
    required: 'Required',
    live: 'Live',
    rendered: 'Rendered',
    modalReminder: 'Attach the downloaded Markdown file and any relevant local images before sending.',
    modalReminderDownload: 'Download the Markdown file first to enable the email draft action.',
    emailNone: 'None provided',
  },
  'ja-JP': {
    title: 'Knowledge Center に寄稿する',
    subtitle:
      '親しみやすい編集画面で記事を作成し、プレビュー確認後に Markdown とメールで公開依頼を送信できます。',
    metadata: '記事設定',
    content: 'エディタ',
    preview: 'プレビュー',
    readiness: '公開依頼の準備状況',
    modalTitle: '公開依頼を送信',
    download: 'Markdown をダウンロード',
    email: 'メール下書きを開く',
    send: '公開依頼を送信',
    linkedImageError: '画像が表示されない場合は、公開依頼メールに画像を添付してください',
    previewHelp: '公開後の見え方をここで確認できます。',
    fieldLabels: {
      title: 'ドキュメントタイトル',
      author: '作成者名',
      team: 'チーム / 部門',
      summary: '概要',
      audience: '想定読者',
      location: '掲載先の候補 URL',
      videoLinks: '動画リンク',
      notes: 'レビュー担当者へのメモ',
    },
    fieldHelp: {
      location:
        'この内容を配置したい Knowledge Center のページまたはセクション URL を入力してください。',
      videoLinks: '録画やデモを参照する場合は、1 行に 1 件ずつ URL を入力してください。',
    },
    readinessItems: {
      metadata: '必須メタデータの入力完了',
      location: '掲載先 URL が有効',
      markdown: 'Markdown を生成可能',
      images: '画像リンクの確認または添付案内が完了',
    },
    modalSteps: [
      'Markdown ファイルをダウンロードします。',
      'jyp4013@yum.com 宛てのメール下書きを開きます。',
      'Markdown ファイルと必要な画像を添付します。',
      '公開依頼メールを送信します。',
    ],
    templateLabel: 'テンプレートから開始',
    helperBar: 'ツールバーで文書を整え、リンクや画像 URL を追加し、公開依頼用のパッケージを準備します。',
    imageHealthEmpty: 'まだ画像リンクは追加されていません。',
    close: '閉じる',
    draftTitle: '無題の下書き',
    draftSummary: 'レビュー担当者が内容を理解できるよう、短い概要を追加してください。',
    authorPending: '作成者未入力',
    teamPending: 'チーム未入力',
    audiencePending: '想定読者未入力',
    checking: '確認中...',
    ready: '準備完了',
    previewShow: 'プレビューを表示',
    previewHide: 'プレビューを閉じる',
    hiddenPreviewHint: '執筆に集中できるよう、プレビューは閉じています。必要なときに開いて最終表示を確認してください。',
    heroEyebrow: 'Knowledge Center Publishing Studio',
    heroFlow: '下書き → プレビュー → ダウンロード → メール',
    structuredStarter: '構成済みのテンプレート',
    required: '必須',
    live: 'ライブ',
    rendered: 'レンダリング',
    modalReminder: '送信前に、ダウンロードした Markdown ファイルと必要なローカル画像を添付してください。',
    modalReminderDownload: '先に Markdown ファイルをダウンロードすると、メール下書きボタンが有効になります。',
    emailNone: '未入力',
  },
};

const INITIAL_META = {
  title: '',
  author: '',
  team: '',
  summary: '',
  audience: '',
  location: '',
  videoLinks: '',
  notes: '',
};

function slugify(value) {
  return (value || 'knowledge-base-submission')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function yamlValue(value) {
  return JSON.stringify((value || '').trim());
}

function extractText(node) {
  return node.textContent.replace(/\s+/g, ' ').trim();
}

function wrapParagraphs(text) {
  return text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n\n');
}

function convertNodeToMarkdown(node, depth = 0) {
  if (node.nodeType === 3) {
    return node.textContent.replace(/\s+/g, ' ');
  }

  if (node.nodeType !== 1) {
    return '';
  }

  const tag = node.tagName.toLowerCase();
  const children = Array.from(node.childNodes)
    .map((child) => convertNodeToMarkdown(child, depth + 1))
    .join('');
  const text = children.trim();

  switch (tag) {
    case 'h1':
      return `# ${text}\n\n`;
    case 'h2':
      return `## ${text}\n\n`;
    case 'h3':
      return `### ${text}\n\n`;
    case 'p':
      return `${wrapParagraphs(text)}\n\n`;
    case 'strong':
    case 'b':
      return `**${text}**`;
    case 'em':
    case 'i':
      return `*${text}*`;
    case 'blockquote':
      return `${text
        .split('\n')
        .filter(Boolean)
        .map((line) => `> ${line.trim()}`)
        .join('\n')}\n\n`;
    case 'a': {
      const href = node.getAttribute('href') || '';
      return href ? `[${text || href}](${href})` : text;
    }
    case 'img': {
      const src = node.getAttribute('src') || '';
      const alt = node.getAttribute('alt') || 'Image';
      return `![${alt}](${src})\n\n`;
    }
    case 'ul': {
      const items = Array.from(node.children)
        .filter((child) => child.tagName?.toLowerCase() === 'li')
        .map((child) => `${'  '.repeat(Math.max(depth - 1, 0))}- ${extractText(child)}`);
      return `${items.join('\n')}\n\n`;
    }
    case 'ol': {
      const items = Array.from(node.children)
        .filter((child) => child.tagName?.toLowerCase() === 'li')
        .map((child, index) => `${'  '.repeat(Math.max(depth - 1, 0))}${index + 1}. ${extractText(child)}`);
      return `${items.join('\n')}\n\n`;
    }
    case 'li':
      return `${text}\n`;
    case 'code':
      if (node.parentElement?.tagName?.toLowerCase() === 'pre') {
        return text;
      }
      return `\`${text}\``;
    case 'pre':
      return `\`\`\`\n${node.textContent.trim()}\n\`\`\`\n\n`;
    case 'hr':
      return `---\n\n`;
    case 'table': {
      const rows = Array.from(node.querySelectorAll('tr')).map((row) =>
        Array.from(row.children).map((cell) => extractText(cell)),
      );

      if (!rows.length) {
        return '';
      }

      const [headerRow, ...bodyRows] = rows;
      const header = `| ${headerRow.join(' | ')} |`;
      const divider = `| ${headerRow.map(() => '---').join(' | ')} |`;
      const body = bodyRows.map((row) => `| ${row.join(' | ')} |`).join('\n');
      return `${header}\n${divider}${body ? `\n${body}` : ''}\n\n`;
    }
    default:
      return children;
  }
}

function buildMarkdown(meta, html) {
  if (typeof window === 'undefined') {
    return '';
  }

  const parser = new window.DOMParser();
  const doc = parser.parseFromString(`<article>${html}</article>`, 'text/html');
  const body = Array.from(doc.body.firstChild.childNodes)
    .map((node) => convertNodeToMarkdown(node))
    .join('')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  const videos = meta.videoLinks
    .split('\n')
    .map((link) => link.trim())
    .filter(Boolean);

  return `---
title: ${yamlValue(meta.title || 'Untitled')}
author: ${yamlValue(meta.author || 'Unknown')}
team: ${yamlValue(meta.team || 'Unknown')}
summary: ${yamlValue(meta.summary)}
audience: ${yamlValue(meta.audience)}
suggested_location: ${yamlValue(meta.location)}
---

${body}

${videos.length ? `## Video Links\n\n${videos.map((link) => `- ${link}`).join('\n')}\n\n` : ''}${meta.notes ? `## Notes to Reviewer\n\n${meta.notes.trim()}\n` : ''}`.trim();
}

function renderPreviewNodes(html, onImageStateChange) {
  if (typeof window === 'undefined') {
    return null;
  }

  const parser = new window.DOMParser();
  const doc = parser.parseFromString(`<article>${html}</article>`, 'text/html');

  const renderNode = (node, key) => {
    if (node.nodeType === 3) {
      return node.textContent;
    }

    if (node.nodeType !== 1) {
      return null;
    }

    const tag = node.tagName.toLowerCase();
    const children = Array.from(node.childNodes).map((child, index) =>
      renderNode(child, `${key}-${index}`),
    );

    if (tag === 'img') {
      const src = node.getAttribute('src') || '';
      const alt = node.getAttribute('alt') || 'Linked reference';
      return (
        <figure key={key} className={styles.previewImageCard}>
          <img
            src={src}
            alt={alt}
            onLoad={() => onImageStateChange(src, true)}
            onError={() => onImageStateChange(src, false)}
          />
          <figcaption>{alt}</figcaption>
        </figure>
      );
    }

    if (tag === 'table') {
      return (
        <div key={key} className={styles.previewTableWrap}>
          {React.createElement(tag, {}, children)}
        </div>
      );
    }

    return React.createElement(tag, {key}, children);
  };

  return Array.from(doc.body.firstChild.childNodes).map((node, index) =>
    renderNode(node, `preview-${index}`),
  );
}

function isValidUrl(value) {
  if (!value) {
    return false;
  }

  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (error) {
    return false;
  }
}

function ToolbarButton({label, onClick}) {
  return (
    <button className={styles.toolbarButton} type="button" onClick={onClick}>
      {label}
    </button>
  );
}

function ToolbarGroup({children}) {
  return <div className={styles.toolbarGroup}>{children}</div>;
}

function PreviewImageHealth({images, warningText, emptyText, readyText, checkingText}) {
  if (!images.length) {
    return <p className={styles.readinessHint}>{emptyText}</p>;
  }

  return (
    <div className={styles.imageHealthList}>
      {images.map((image) => (
        <div
          key={image.src}
          className={clsx(
            styles.imageHealthRow,
            image.status === 'loaded' && styles.imageHealthRowOk,
            image.status === 'error' && styles.imageHealthRowError,
          )}
        >
          <span className={styles.imageHealthUrl}>{image.src}</span>
          <span className={styles.imageHealthStatus}>
            {image.status === 'loaded'
              ? readyText
              : image.status === 'error'
                ? warningText
                : checkingText}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ContributePage() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();
  const copy = COPY[currentLocale] ?? COPY['en-US'];
  const editorRef = useRef(null);
  const [meta, setMeta] = useState(INITIAL_META);
  const [selectedTemplate, setSelectedTemplate] = useState(DEFAULT_TEMPLATE);
  const [editorHtml, setEditorHtml] = useState(TEMPLATES[DEFAULT_TEMPLATE].html.trim());
  const [imageStatuses, setImageStatuses] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== editorHtml) {
      editorRef.current.innerHTML = editorHtml;
    }
  }, [editorHtml]);

  const linkedImages = [];
  if (typeof window !== 'undefined') {
    const parser = new window.DOMParser();
    const doc = parser.parseFromString(`<article>${editorHtml}</article>`, 'text/html');
    doc.querySelectorAll('img').forEach((img) => {
      const src = img.getAttribute('src') || '';
      if (src) {
        linkedImages.push({
          src,
          status: imageStatuses[src] || 'pending',
        });
      }
    });
  }

  const markdown = buildMarkdown(meta, editorHtml);

  useEffect(() => {
    setDownloaded(false);
  }, [markdown]);

  const metadataComplete = Boolean(
    meta.title.trim() &&
      meta.author.trim() &&
      meta.team.trim() &&
      meta.summary.trim() &&
      meta.audience.trim(),
  );
  const locationValid = isValidUrl(meta.location.trim());
  const markdownReady = Boolean(markdown.trim());
  const imagesReady = linkedImages.every((image) => image.status !== 'error');

  const applyCommand = (command, value = null) => {
    if (typeof document === 'undefined') {
      return;
    }

    editorRef.current?.focus();
    document.execCommand(command, false, value);
    setEditorHtml(editorRef.current?.innerHTML || '');
  };

  const insertLink = () => {
    const href = window.prompt('Enter a link URL');
    if (!href) {
      return;
    }
    applyCommand('createLink', href);
  };

  const insertImage = () => {
    const src = window.prompt('Enter an image URL');
    if (!src) {
      return;
    }
    applyCommand('insertImage', src);
  };

  const insertDivider = () => {
    if (typeof document === 'undefined') {
      return;
    }

    editorRef.current?.focus();
    document.execCommand('insertHorizontalRule', false);
    setEditorHtml(editorRef.current?.innerHTML || '');
  };

  const insertCodeBlock = () => {
    if (typeof document === 'undefined') {
      return;
    }

    const code = window.prompt('Paste the code block content');
    if (!code) {
      return;
    }

    document.execCommand('insertHTML', false, `<pre><code>${escapeHtml(code)}</code></pre>`);
    setEditorHtml(editorRef.current?.innerHTML || '');
  };

  const insertTable = () => {
    if (typeof document === 'undefined') {
      return;
    }

    document.execCommand(
      'insertHTML',
      false,
      '<table><thead><tr><th>Column A</th><th>Column B</th></tr></thead><tbody><tr><td>Value</td><td>Value</td></tr><tr><td>Value</td><td>Value</td></tr></tbody></table><p></p>',
    );
    setEditorHtml(editorRef.current?.innerHTML || '');
  };

  const updateMetaField = (field, value) => {
    setMeta((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const applyTemplate = (templateKey) => {
    const template = TEMPLATES[templateKey];
    setSelectedTemplate(templateKey);
    setEditorHtml(template.html.trim());
    setImageStatuses({});
  };

  const updateImageStatus = (src, loaded) => {
    setImageStatuses((current) => {
      const nextStatus = loaded ? 'loaded' : 'error';
      if (current[src] === nextStatus) {
        return current;
      }

      return {
        ...current,
        [src]: nextStatus,
      };
    });
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], {type: 'text/markdown;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${slugify(meta.title)}.md`;
    link.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  const openEmailDraft = () => {
    const lines = [
      `Document Title: ${meta.title}`,
      `Author Name: ${meta.author}`,
      `Team / Function: ${meta.team}`,
      `Summary: ${meta.summary}`,
      `Intended Audience: ${meta.audience}`,
      `Suggested Knowledge Center Location: ${meta.location}`,
      '',
      'Video Links:',
      meta.videoLinks || copy.emailNone,
      '',
      'Notes to Reviewer:',
      meta.notes || copy.emailNone,
      '',
      'Please attach the generated Markdown file and any relevant images before sending.',
    ];

    const subject = `Knowledge Base Submission: ${meta.title || 'Untitled'}`;
    window.location.href = `mailto:jyp4013@yum.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join('\n'))}`;
  };

  const readiness = [
    {
      label: copy.readinessItems.metadata,
      ready: metadataComplete,
    },
    {
      label: copy.readinessItems.location,
      ready: locationValid,
    },
    {
      label: copy.readinessItems.markdown,
      ready: markdownReady,
    },
    {
      label: copy.readinessItems.images,
      ready: linkedImages.length ? imagesReady : true,
    },
  ];

  return (
    <Layout title={copy.title} description={copy.subtitle}>
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>{copy.heroEyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.subtitle}</p>
          </div>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeLabel}>Submission Flow</span>
            <strong>{copy.heroFlow}</strong>
          </div>
        </section>

        <section className={styles.templateStrip}>
          <div className={styles.templateStripHeader}>
            <h2>{copy.templateLabel}</h2>
            <p>{copy.helperBar}</p>
          </div>
          <div className={styles.templateGrid}>
            {Object.entries(TEMPLATES).map(([key, template]) => (
              <button
                key={key}
                type="button"
                className={clsx(styles.templateCard, selectedTemplate === key && styles.templateCardActive)}
                onClick={() => applyTemplate(key)}
              >
                <span className={styles.templateCardLabel}>
                  {template.label?.[currentLocale] ?? template.label?.['en-US'] ?? template.label}
                </span>
                <span className={styles.templateCardMeta}>{copy.structuredStarter}</span>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.workspace}>
          <aside className={styles.sidebar}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>{copy.metadata}</h2>
                <span className={styles.panelPill}>{copy.required}</span>
              </div>
              <div className={styles.fieldList}>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.title}</span>
                  <input
                    value={meta.title}
                    onChange={(event) => updateMetaField('title', event.target.value)}
                    placeholder="e.g. How to update a promo configuration"
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.author}</span>
                  <input
                    value={meta.author}
                    onChange={(event) => updateMetaField('author', event.target.value)}
                    placeholder="Your name"
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.team}</span>
                  <input
                    value={meta.team}
                    onChange={(event) => updateMetaField('team', event.target.value)}
                    placeholder="e.g. Product, Support, Ops"
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.audience}</span>
                  <input
                    value={meta.audience}
                    onChange={(event) => updateMetaField('audience', event.target.value)}
                    placeholder="Who should read this?"
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.summary}</span>
                  <textarea
                    rows="4"
                    value={meta.summary}
                    onChange={(event) => updateMetaField('summary', event.target.value)}
                    placeholder="Summarize the outcome and what the article helps the reader do."
                  />
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.location}</span>
                  <input
                    value={meta.location}
                    onChange={(event) => updateMetaField('location', event.target.value)}
                    placeholder="https://kfc-atlas-portal.vercel.app/docs/..."
                  />
                  <small>{copy.fieldHelp.location}</small>
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.videoLinks}</span>
                  <textarea
                    rows="4"
                    value={meta.videoLinks}
                    onChange={(event) => updateMetaField('videoLinks', event.target.value)}
                    placeholder="https://..."
                  />
                  <small>{copy.fieldHelp.videoLinks}</small>
                </label>
                <label className={styles.field}>
                  <span>{copy.fieldLabels.notes}</span>
                  <textarea
                    rows="4"
                    value={meta.notes}
                    onChange={(event) => updateMetaField('notes', event.target.value)}
                    placeholder="Add any placement context or reviewer notes."
                  />
                </label>
              </div>
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>{copy.readiness}</h2>
                <span className={styles.panelPill}>{copy.live}</span>
              </div>
              <div className={styles.readinessList}>
                {readiness.map((item) => (
                  <div
                    key={item.label}
                    className={clsx(styles.readinessItem, item.ready ? styles.ready : styles.notReady)}
                  >
                    <span className={styles.readinessDot} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <PreviewImageHealth
                images={linkedImages}
                warningText={copy.linkedImageError}
                emptyText={copy.imageHealthEmpty}
                readyText={copy.ready}
                checkingText={copy.checking}
              />
            </div>
          </aside>

          <div className={styles.editorColumn}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>{copy.content}</h2>
                <span className={styles.panelPill}>WYSIWYG</span>
              </div>
              <div className={styles.toolbar}>
                <ToolbarGroup>
                  <select
                    className={styles.toolbarSelect}
                    defaultValue="p"
                    onChange={(event) => applyCommand('formatBlock', event.target.value)}
                  >
                    <option value="p">Paragraph</option>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                    <option value="blockquote">Quote</option>
                  </select>
                </ToolbarGroup>
                <ToolbarGroup>
                  <ToolbarButton label="B" onClick={() => applyCommand('bold')} />
                  <ToolbarButton label="I" onClick={() => applyCommand('italic')} />
                  <ToolbarButton label="U" onClick={() => applyCommand('underline')} />
                </ToolbarGroup>
                <ToolbarGroup>
                  <ToolbarButton label="• List" onClick={() => applyCommand('insertUnorderedList')} />
                  <ToolbarButton label="1. List" onClick={() => applyCommand('insertOrderedList')} />
                </ToolbarGroup>
                <ToolbarGroup>
                  <ToolbarButton label="Link" onClick={insertLink} />
                  <ToolbarButton label="Image" onClick={insertImage} />
                  <ToolbarButton label="Code" onClick={insertCodeBlock} />
                  <ToolbarButton label="Table" onClick={insertTable} />
                  <ToolbarButton label="Rule" onClick={insertDivider} />
                </ToolbarGroup>
                <ToolbarGroup>
                  <ToolbarButton label="Undo" onClick={() => applyCommand('undo')} />
                  <ToolbarButton label="Redo" onClick={() => applyCommand('redo')} />
                </ToolbarGroup>
              </div>
              <div
                ref={editorRef}
                className={styles.editorSurface}
                contentEditable
                suppressContentEditableWarning
                onInput={(event) => setEditorHtml(event.currentTarget.innerHTML)}
              />
            </div>

            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <h2>{copy.preview}</h2>
                <div className={styles.panelHeaderActions}>
                  <button
                    type="button"
                    className={styles.previewToggle}
                    onClick={() => setPreviewOpen((current) => !current)}
                  >
                    {previewOpen ? copy.previewHide : copy.previewShow}
                  </button>
                  <span className={styles.panelPill}>{copy.rendered}</span>
                </div>
              </div>
              {previewOpen ? (
                <>
                  <p className={styles.previewHelp}>{copy.previewHelp}</p>
                  <article className={clsx('markdown', styles.previewSurface)}>
                    <header className={styles.previewHeader}>
                      <p className={styles.previewTitle}>{meta.title || copy.draftTitle}</p>
                      <p className={styles.previewSummary}>{meta.summary || copy.draftSummary}</p>
                      <div className={styles.previewMeta}>
                        <span>{meta.author || copy.authorPending}</span>
                        <span>{meta.team || copy.teamPending}</span>
                        <span>{meta.audience || copy.audiencePending}</span>
                      </div>
                    </header>
                    {renderPreviewNodes(editorHtml, updateImageStatus)}
                    {linkedImages.some((image) => image.status === 'error') ? (
                      <p className={styles.previewWarning}>{copy.linkedImageError}</p>
                    ) : null}
                    {meta.videoLinks.trim() ? (
                      <section className={styles.previewVideos}>
                        <h2>Video Links</h2>
                        <ul>
                          {meta.videoLinks
                            .split('\n')
                            .map((link) => link.trim())
                            .filter(Boolean)
                            .map((link) => (
                              <li key={link}>
                                <a href={link} target="_blank" rel="noreferrer">
                                  {link}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </section>
                    ) : null}
                  </article>
                </>
              ) : (
                <div className={styles.previewCollapsed}>
                  <p>{copy.hiddenPreviewHint}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className={styles.pageActions}>
          <button
            type="button"
            className={styles.primaryAction}
            onClick={() => setModalOpen(true)}
            disabled={!markdownReady}
          >
            {copy.send}
          </button>
        </div>

        {modalOpen ? (
          <div className={styles.modalBackdrop} role="presentation" onClick={() => setModalOpen(false)}>
            <div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-labelledby="submission-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2 id="submission-modal-title">{copy.modalTitle}</h2>
                <button type="button" className={styles.modalClose} onClick={() => setModalOpen(false)}>
                  {copy.close}
                </button>
              </div>
              <ol className={styles.modalSteps}>
                {copy.modalSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className={styles.modalActions}>
                <button type="button" className={styles.secondaryAction} onClick={downloadMarkdown}>
                  {copy.download}
                </button>
                <button
                  type="button"
                  className={styles.primaryAction}
                  onClick={openEmailDraft}
                  disabled={!downloaded}
                >
                  {copy.email}
                </button>
              </div>
              <div className={styles.modalReminder}>
                <p>{copy.modalReminder}</p>
                {!downloaded ? <p>{copy.modalReminderDownload}</p> : null}
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </Layout>
  );
}
