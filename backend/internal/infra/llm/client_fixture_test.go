package llm

import "github.com/THOTH-AI/THOTH-Chat/backend/internal/shared/security"

func newTestClient() *Client {
	return NewClient(security.OutboundPolicy{})
}
