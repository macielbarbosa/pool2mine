const repositoryUrl = 'https://gitlab.com/tapioca/multiprova/multiprova-web.git'
const gitlabUrl = 'https://gitlab.com/tapioca/multiprova/multiprova-web'
const npmPublish = false

const notes = {
  breaking: 'Breaking',
  feat: 'Features',
  fix: 'Bug Fixes',
  refactor: 'Code Refactoring',
  config: 'Config',
  test: 'Tests',
  docs: 'Documentation',
  perf: 'Performance',
}

const commitAnalyzerOptions = {
  preset: 'angular',
  releaseRules: [
    { type: 'breaking', release: 'major' },
    { type: 'refactor', release: 'patch' },
    { type: 'config', release: 'patch' },
    { type: 'perf', release: 'patch' },
    { type: 'docs', release: 'patch' },
    { scope: 'test', release: false },
    { scope: 'ci', release: false },
    { scope: 'wip', release: false },
  ],
  parserOpts: {
    noteKeywords: [],
  },
}

const releaseNotesGeneratorOptions = {
  writerOpts: {
    transform: (commit, context) => {
      const issues = []
      if (notes[commit.type] !== undefined) {
        commit.type = notes[commit.type]
      } else {
        return
      }

      if (typeof commit.hash === 'string') {
        commit.shortHash = commit.hash.substring(0, 7)
      }

      if (typeof commit.subject === 'string') {
        let url = context.repository ? `${context.host}/${context.owner}/${context.repository}` : context.repoUrl
        if (url) {
          url = `${url}/issues/`
          // Issue URLs.
          commit.subject = commit.subject.replace(/#([0-9]+)/g, (_, issue) => {
            issues.push(issue)
            return `[#${issue}](${url}${issue})`
          })
        }
        if (context.host) {
          // User URLs.
          commit.subject = commit.subject.replace(/\B@([a-z0-9](?:-?[a-z0-9/]){0,38})/g, (_, username) => {
            if (username.includes('/')) {
              return `@${username}`
            }
            return `[@${username}](${context.host}/${username})`
          })
        }
      }

      // remove references that already appear in the subject
      commit.references = commit.references.filter(reference => {
        if (issues.indexOf(reference.issue) === -1) {
          return true
        }
        return false
      })
      return commit
    },
  },
}

module.exports = {
  debug: true,
  repositoryUrl: repositoryUrl,
  plugins: [
    // analyze commits with conventional-changelog
    ['@semantic-release/commit-analyzer', commitAnalyzerOptions],
    // generate changelog content with conventional-changelog
    ['@semantic-release/release-notes-generator', releaseNotesGeneratorOptions],
    // updates the changelog file
    '@semantic-release/changelog',
    // publishes to npm
    ['@semantic-release/npm', { npmPublish: npmPublish }],
    // creating a git tag
    ['@semantic-release/gitlab', { gitlabUrl: gitlabUrl }],
    // creating a new version commit
    '@semantic-release/git',
  ],
}
