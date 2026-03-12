import fs from 'node:fs';
import path from 'node:path';

const root = '/Users/justinpagalilauan/Desktop/kfc-atlas-portal';
const docsRoot = path.join(root, 'i18n/ja-JP/docusaurus-plugin-content-docs/current');
const map = JSON.parse(fs.readFileSync(path.join(root, 'i18n/ja-JP/translation-map.json'), 'utf8'));

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile() && full.endsWith('.md')) out.push(full);
  }
  return out;
}

function replaceAll(text, replacements) {
  let next = text;
  for (const [from, to] of Object.entries(replacements)) {
    next = next.split(from).join(to);
  }
  return next;
}

function translateObject(phrase) {
  const exact = map.objectPhrases[phrase];
  if (exact) return exact;

  let next = phrase;
  const ordered = Object.entries(map.objectPhrases).sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of ordered) {
    next = next.replaceAll(from, to);
  }
  return next;
}

function translateTitle(title) {
  if (map.exactTitles[title]) return map.exactTitles[title];

  const patterns = [
    [/^Create (?:a|an) (.+)$/, (m) => `${translateObject(m[1])}を作成する`],
    [/^Edit (?:a|an) (.+)$/, (m) => `${translateObject(m[1])}を編集する`],
    [/^Edit (.+)$/, (m) => `${translateObject(m[1])}を編集する`],
    [/^Delete (?:a|an) (.+)$/, (m) => `${translateObject(m[1])}を削除する`],
    [/^Delete (.+)$/, (m) => `${translateObject(m[1])}を削除する`],
    [/^Copy (?:a|an) (.+)$/, (m) => `${translateObject(m[1])}をコピーする`],
    [/^Copy (.+)$/, (m) => `${translateObject(m[1])}をコピーする`],
    [/^Add Metafields to (?:a|an) (.+)$/, (m) => `${translateObject(m[1])}にメタフィールドを追加する`],
    [/^Add Metafields to (.+)$/, (m) => `${translateObject(m[1])}にメタフィールドを追加する`],
    [/^Add Metadata to (.+)$/, (m) => `${translateObject(m[1])}にメタデータを追加する`],
    [/^Add an Image to (?:a|an) (.+)$/, (m) => `${translateObject(m[1])}に画像を追加する`],
    [/^View (.+)$/, (m) => `${translateObject(m[1])}を確認する`],
    [/^Assign (.+)$/, (m) => `${translateObject(m[1])}を割り当てる`],
    [/^Import (.+)$/, (m) => `${translateObject(m[1])}をインポートする`],
    [/^Generate (.+)$/, (m) => `${translateObject(m[1])}を生成する`],
    [/^Archive (?:a|an) (.+)$/, (m) => `${translateObject(m[1])}をアーカイブする`],
    [/^Find (.+)$/, (m) => `${translateObject(m[1])}を検索する`],
    [/^Publish (?:a|an) (.+)$/, (m) => `${translateObject(m[1])}を公開する`],
    [/^Publish (.+)$/, (m) => `${translateObject(m[1])}を公開する`]
  ];

  for (const [regex, formatter] of patterns) {
    const match = title.match(regex);
    if (match) return formatter(match);
  }
  return title;
}

function buildGuideOverview(title) {
  const translatedTitle = translateTitle(title);
  return `このガイドでは、Atlas Admin Portal で${translatedTitle}手順を説明します。`;
}

function translateStepBody(body) {
  let next = body.trim();

  next = next.replace(/^Start by going to the (.+?) screen by clicking here\.?$/i, (_, screen) => {
    return `まず、こちらをクリックして ${screen} 画面に移動します。`;
  });
  next = next.replace(/^To create a new promotion, click here\.?$/i, '新しいプロモーションを作成するには、こちらをクリックします。');
  next = next.replace(/^Click (.+)$/i, (_, action) => `${action.replace(/\.$/, '')} をクリックします。`);
  next = next.replace(/^Fill in (.+)$/i, (_, action) => `${action.replace(/\.$/, '')} を入力します。`);
  next = next.replace(/^Select (.+)$/i, (_, action) => `${action.replace(/\.$/, '')} を選択します。`);
  next = next.replace(/^Use this to (.+)$/i, (_, action) => `${action.replace(/\.$/, '')}ためにここを使用します。`);
  next = next.replace(/^When you are done (.+)$/i, (_, rest) => `完了したら、${rest.replace(/\.$/, '')}。`);
  next = next.replace(/^When you are finished (.+)$/i, (_, rest) => `完了したら、${rest.replace(/\.$/, '')}。`);
  next = next.replace(/^To create (.+)$/i, (_, rest) => `${rest.replace(/\.$/, '')}。`);

  next = next
    .replaceAll('Save button', 'Save ボタン')
    .replaceAll('Create button', 'Create ボタン')
    .replaceAll('button', 'ボタン')
    .replaceAll('screen', '画面')
    .replaceAll('click here', 'こちらをクリック')
    .replaceAll('the “+ Create New Store”', '「+ Create New Store」')
    .replaceAll('the Save ボタン will become active to click and save your new store.  That’s it,  you have created your store', 'Save ボタンが有効になったらクリックして保存します。これで店舗の作成は完了です')
    .replaceAll('each “*”必須項目 and other valuable information', '各「*」必須項目と必要な情報')
    .replaceAll('Add effect and fill out effect information.', '効果を追加し、効果に関する情報を入力します。')
    .replaceAll('required field', '必須項目')
    .replaceAll('required fields', '必須項目')
    .replaceAll('Fill out', '入力します')
    .replaceAll('Choose a promotion flow based on the type of promotion you want to create.   If the promotions isn’t a new price, buy 1 get 1, or reduced price click custom promotion.', '作成したいプロモーションの種類に応じて、適切なフローを選択します。新価格、1つ買うと1つ無料、値引きのいずれでもない場合は custom promotion を選択します。')
    .replaceAll('(Add Requirement)  Based on what flow select certain requirements will be recommended.  (click add to add them)', '（Add Requirement）選択したフローに応じて推奨される要件が表示されます。（add をクリックして追加します）')
    .replaceAll('(Add Requirement)  Select requirement type then click add requirement ( you can also utilize the recommended requirements below)', '（Add Requirement）要件タイプを選択し、add requirement をクリックします（下の推奨要件も利用できます）。')
    .replaceAll('Review your information next and click create to create the promotion.', '最後に内容を確認し、Create をクリックしてプロモーションを作成します。')
    .replaceAll('Click Edit.', 'Edit をクリックします。')
    .replaceAll('Click Save.', 'Save をクリックします。')
    .replaceAll('Click create when finished.', '完了したら Create をクリックします。');

  return next;
}

function translateAdditionalInfoLine(line) {
  if (!line.startsWith('- ')) return line;
  const content = line.slice(2).trim();
  if (content.includes(' - ')) {
    const parts = content.split(' - ');
    return `- ${parts.map((part) => translateTitle(part.trim())).join(' - ')}`;
  }
  return `- ${translateTitle(content)}`;
}

function translateAdminLinks(text) {
  return text.replace(/\[([^\]]+)\]\((\/docs\/admin-portal-guide\/[^)]+)\)/g, (_, label, href) => {
    return `[${translateTitle(label)}](${href})`;
  });
}

function processFile(file) {
  let text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(docsRoot, file);

  text = replaceAll(text, map.headings);
  text = replaceAll(text, map.sentenceReplacements);

  const titleMatch = text.match(/^title:\s+"?(.+?)"?$/m);
  const originalTitle = titleMatch ? titleMatch[1] : null;
  if (originalTitle) {
    const translatedTitle = translateTitle(originalTitle);
    text = text.replace(/^title:\s+"?.+?"?$/m, `title: "${translatedTitle}"`);
    text = text.replace(/^sidebar_label:\s+"?.+?"?$/m, `sidebar_label: "${translatedTitle}"`);
    text = text.replace(/^# .+$/m, `# ${translatedTitle}`);

    if (rel.startsWith('admin-portal-guide/') && rel.split('/').length > 2) {
      text = text.replace(
        /## このガイドで扱う内容\n\n[\s\S]*?\n\n## 手順/,
        `## このガイドで扱う内容\n\n${buildGuideOverview(originalTitle)}\n\n## 手順`
      );
    }
  }

  text = text.replace(/\*\*Step (\d+):\*\*\s*(.+)$/gm, (_, step, body) => {
    return `**ステップ ${step}:** ${translateStepBody(body)}`;
  });

  text = text.replace(/\*Part of the \[Admin Portal Guide\]\(\/docs\/admin-portal-guide\) · Section: ([^*]+)\*/g, (_, section) => {
    return `*[\u7ba1\u7406\u30dd\u30fc\u30bf\u30eb\u30ac\u30a4\u30c9](/docs/admin-portal-guide) の一部 · セクション: ${translateTitle(section.trim())}*`;
  });

  text = text.replace(/^- .+$/gm, (line) => {
    if (rel.startsWith('admin-portal-guide/') && !line.includes('](')) {
      return translateAdditionalInfoLine(line);
    }
    return line;
  });

  if (rel.startsWith('admin-portal-guide/')) {
    text = translateAdminLinks(text);
  }

  fs.writeFileSync(file, text);
}

for (const file of walk(docsRoot)) {
  processFile(file);
}

console.log('Translated Japanese docs with local map.');
