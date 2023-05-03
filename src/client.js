export function getUser(id) {
    return fetch(`https://localhost:5001/api/Users/${id}`)
        .then(resp => resp.json())
        .catch(err => console.error(err))
}


export function postFeedback(reviewedUserId, title, content) {
    return fetch('https://localhost:5001/api/Feedbacks', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'reviewedUserId': reviewedUserId,
            'title': title,
            'content': content
        })
    })
        .then(resp => resp.status)
        .catch(err => console.error(err))
}


export function getFeedbackByFeedbackId(feedbackId) {
    return fetch(`https://localhost:5001/api/Feedbacks/${feedbackId}`)
        .then(resp => resp.json())
        .catch(err => console.error(err))
}

export function getFeedbacksByUserId(reviewedUserId, pageNumber, pageSize) {
    return fetch(`https://localhost:5001/api/users/${reviewedUserId}/Feedbacks`,
        {
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'PageNumber': pageNumber,
                'PageSize': pageSize
            })
        })
        .then(resp => resp.json())
        .catch(err => console.error(err))
}


export function postFeedbackRequest(reviewedUserId, reviewersIds) {
    return fetch('https://localhost:5001/api/feedback-requests', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'reviewedUserId': reviewedUserId,
            'reviewersIds': reviewersIds
        })
    })
        .then(resp => resp.status)
        .catch(err => console.error(err))
}

export function getFeedbackRequestById(feedbackRequestId) {
    return fetch(`https://localhost:5001/api/feedback-requests/${feedbackRequestId}`)
        .then(resp => resp.json())
        .catch(err => console.error(err))
}

export function getFeedbackRequestByReviewerId(reviewerId) {
    return fetch(`https://localhost:5001/api/users/${reviewerId}/feedback-requests`)
        .then(resp => resp.json())
        .catch(err => console.error(err))
}

