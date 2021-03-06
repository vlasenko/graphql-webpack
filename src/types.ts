/* tslint:disable */

// ====================================================
// START: Typescript template
// ====================================================

import { GraphQLResolveInfo } from "graphql";

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = any,
  Context = any,
  Args = any
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

// ====================================================
// Types
// ====================================================

export interface Query {
  posts?: (Post | null)[] | null;

  postsOf?: (Post | null)[] | null;

  authors?: (Author | null)[] | null;
}

export interface Post {
  id: number;

  title?: string | null;

  author?: Author | null;

  votes?: number | null;
}

export interface Author {
  id: number;

  firstName?: string | null;

  lastName?: string | null;

  posts?: (Post | null)[] | null;
}

export interface Mutation {
  upvotePost?: Post | null;
}

// ====================================================
// Arguments
// ====================================================

export interface PostsOfQueryArgs {
  authorId?: number | null;
}
export interface UpvotePostMutationArgs {
  postId: number;
}

// ====================================================
// Resolvers
// ====================================================

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    posts?: PostsResolver<(Post | null)[] | null, any, Context>;

    postsOf?: PostsOfResolver<(Post | null)[] | null, any, Context>;

    authors?: AuthorsResolver<(Author | null)[] | null, any, Context>;
  }

  export type PostsResolver<
    R = (Post | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PostsOfResolver<
    R = (Post | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, PostsOfArgs>;
  export interface PostsOfArgs {
    authorId?: number | null;
  }

  export type AuthorsResolver<
    R = (Author | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace PostResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>;

    title?: TitleResolver<string | null, any, Context>;

    author?: AuthorResolver<Author | null, any, Context>;

    votes?: VotesResolver<number | null, any, Context>;
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type TitleResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type AuthorResolver<
    R = Author | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type VotesResolver<
    R = number | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace AuthorResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>;

    firstName?: FirstNameResolver<string | null, any, Context>;

    lastName?: LastNameResolver<string | null, any, Context>;

    posts?: PostsResolver<(Post | null)[] | null, any, Context>;
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
  export type PostsResolver<
    R = (Post | null)[] | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    upvotePost?: UpvotePostResolver<Post | null, any, Context>;
  }

  export type UpvotePostResolver<
    R = Post | null,
    Parent = any,
    Context = any
  > = Resolver<R, Parent, Context, UpvotePostArgs>;
  export interface UpvotePostArgs {
    postId: number;
  }
}

// ====================================================
// END: Typescript template
// ====================================================
