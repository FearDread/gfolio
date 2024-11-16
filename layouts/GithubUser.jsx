
import { Link } from "react-router-dom";
import GitHubUserAnalytics from "../components/GitHubUserAnalytics";
import GitHubUserLinks from "../components/GitHubUserLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useGitHubUserContext } from "../contexts/GithubUserContext";

import "react-lazy-load-image-component/src/effects/blur.css";
import PlaceholderImage from "../images/placeholder.jpg";
import SEO from "../components/SEO";

const GitHubUser = () => {
  const data = useGitHubUserContext();
  const ChakraLink = chakra(Link);
  const ChakraLazyLoadImage = chakra(LazyLoadImage);
  if (!data) return <Spinner size="xl" />;

  return (
    <>
      <SEO
        title="nefejames - GitHub profile"
        description="Front end web developer and technical writer - always learning - nefejames"
      />
      <Card>
        <Flex>
          <Box width={["full", "300px"]}>
            <ChakraLazyLoadImage
              src={data.avatar_url}
              placeholderSrc={PlaceholderImage}
            />
            <Text as="span" mt={3} display="inline-block" color="teal.900">
              @{data.login}
            </Text>
          </Box>
          <VStack spacing={7} alignItems="start">
            <VStack spacing={5} alignItems="start">
              <VStack>
                <Text>
                  {data.name}
                </Text>
              </VStack>
              <Text as="p">{data.bio}</Text>
            </VStack>
            <GitHubUserAnalytics
              noOfRepos={data.public_repos}
              noOfFollowers={data.followers}
              noOfFollowing={data.following}
            />
            <GitHubUserLinks webUrl={data.blog} location={data.location} />
            <ChakraLink to="/repos" w="full">
              <Button>View my Repos</Button>
            </ChakraLink>
          </VStack>
        </Flex>
      </Card>
    </>
  );
}

export default GithubUser;