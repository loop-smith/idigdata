import ContactForm from "./ContactForm";

type Props = { articleSlug: string };

export default function ArticleRequestForm({ articleSlug }: Props) {
  return (
    <ContactForm interestType="article_request" articleSlug={articleSlug} />
  );
}
