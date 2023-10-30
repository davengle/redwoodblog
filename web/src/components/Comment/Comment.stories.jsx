import Comment from './Comment'

var twoHoursAgo = new Date()
twoHoursAgo.setHours(twoHoursAgo.getHours() - 2)

export const Primary = () => {
  return (
    <>
      <Comment
        comment={{
          name: 'Rob Cameron',
          body: 'This is the first comment!',
          createdAt: twoHoursAgo,
        }}
      />
      <Comment
        comment={{
          name: 'Dave Engle',
          body: 'This is the second comment!',
          createdAt: Date.now(),
        }}
      />
    </>
  )
}

export default { component: Comment }
